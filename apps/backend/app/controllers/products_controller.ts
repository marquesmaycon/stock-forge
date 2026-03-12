import Forge from '#models/forge'
import Product from '#models/product'
import { ProductService } from '#services/product_service'
import ProductTransformer from '#transformers/product_transformer'
import { forgeValidator } from '#validators/forge'
import { paginationValidator } from '#validators/pagination'
import { productValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import type { ModelAttributes } from '@adonisjs/lucid/types/model'
import type { Infer } from '@vinejs/vine/types'

export default class ProductsController {
  /**
   * Display a list of resource
   */
  async index({ serialize, request, response }: HttpContext) {
    const { page = 1, limit = 6 } = await request.validateUsing(paginationValidator)
    const products = await Product.query().preload('rawMaterials').paginate(page, limit)
    const { data } = await serialize(ProductTransformer.transform(products))

    return response.ok({
      products: data,
      meta: {
        nextPage: products.hasMorePages ? products.currentPage + 1 : null,
      },
    })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, serialize }: HttpContext) {
    const { rawMaterials, ...payload } = await request.validateUsing(productValidator)

    const product = await Product.create(payload)

    await product.related('rawMaterials').attach(this.transformRawMaterials(rawMaterials))

    await product.load('rawMaterials')

    const { data } = await serialize(ProductTransformer.transform(product))

    return response.created(data)
  }

  /**
   * Show individual record
   */
  async show({ params, serialize, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    await product.load('rawMaterials')

    const { data } = await serialize(ProductTransformer.transform(product))

    return response.ok(data)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, serialize, response }: HttpContext) {
    const { rawMaterials, ...payload } = await request.validateUsing(productValidator)

    const product = await Product.findOrFail(params.id)

    await product
      .merge(payload)
      .related('rawMaterials')
      .sync(this.transformRawMaterials(rawMaterials))

    await product.load('rawMaterials')

    const { data } = await serialize(ProductTransformer.transform(product))

    return response.ok(data)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    await product.delete()

    return response.noContent()
  }

  /**
   * Forge a Product
   */
  async forge({ request, response, serialize }: HttpContext) {
    const { quantity = 1, params } = await request.validateUsing(forgeValidator)

    const trx = await db.transaction()

    try {
      const product = await Product.query({ client: trx })
        .where('id', params.id)
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

  private transformRawMaterials(rawMaterials: Infer<typeof productValidator>['rawMaterials']) {
    return rawMaterials.reduce(
      (acc, { id, quantity_needed }) => {
        acc[id] = { quantity_needed }
        return acc
      },
      {} as Record<string, { quantity_needed: string }>
    )
  }
}
