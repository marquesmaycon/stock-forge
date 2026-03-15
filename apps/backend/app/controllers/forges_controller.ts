import Forge from '#models/forge'
import Product from '#models/product'
import { ProductService } from '#services/product_service'
import ForgeTransformer from '#transformers/forge_transformer'
import ProductTransformer from '#transformers/product_transformer'
import { forgeValidator } from '#validators/forge'
import { paginationValidator } from '#validators/pagination'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class ForgesController {
  /**
   * Display a list of resource
   */
  async index({ request, response, serialize }: HttpContext) {
    const { page = 1, limit = 5 } = await request.validateUsing(paginationValidator)

    const forges = await Forge.query()
      .orderBy('createdAt', 'desc')
      .preload('product')
      .paginate(page, limit)

    const { data } = await serialize(ForgeTransformer.transform(forges.all()))

    return response.ok({
      data,
      meta: {
        total: forges.total,
        nextPage: forges.hasMorePages ? forges.currentPage + 1 : null,
      },
    })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, serialize, response }: HttpContext) {
    const { quantity = 1, productId } = await request.validateUsing(forgeValidator)

    const trx = await db.transaction()

    try {
      const product = await Product.query({ client: trx })
        .where('id', productId)
        .preload('rawMaterials', (q) => q.forUpdate())
        .firstOrFail()

      for (const material of product.rawMaterials) {
        ProductService.checkRawMaterialSufficiency(quantity, material)
      }

      await Promise.all(
        product.rawMaterials.map(async (rm) => {
          const currentQuantity = Number(rm.quantity)
          const neededPerUnit = Number(rm.$extras.pivot_quantity_needed)

          const newQuantity = currentQuantity - neededPerUnit * quantity
          await rm.merge({ quantity: newQuantity.toString() }).useTransaction(trx).save()
        })
      )

      await Forge.createMany(
        Array.from({ length: quantity }).map(() => ({ productId: product.id }))
      )

      await trx.commit()
      await product.refresh()

      const { data } = await serialize(ProductTransformer.transform(product))

      return response.created(data)
    } catch (err) {
      console.log({ err })
      await trx.rollback()
      return response.badRequest({ message: err.message ?? 'Unable to forge product' })
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const product = await Forge.findOrFail(params.id)

    await product.delete()

    return response.noContent()
  }
}
