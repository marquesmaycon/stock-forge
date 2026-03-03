import Product from '#models/product'
import ProductTransformer from '#transformers/product_transformer'
import { forgeValidator } from '#validators/forge'
import { productValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import type { Infer } from '@vinejs/vine/types'

export default class ProductsController {
  /**
   * Display a list of resource
   */
  async index({ serialize, response }: HttpContext) {
    const products = await Product.query().preload('rawMaterials')

    const { data } = await serialize(ProductTransformer.transform(products))

    return response.ok(data)
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
  async forge({ request, response, serialize, logger }: HttpContext) {
    const { quantity = 1, params } = await request.validateUsing(forgeValidator)

    const trx = await db.transaction()

    try {
      const product = await Product.query({ client: trx })
        .where('id', params.id)
        .preload('rawMaterials', (q) => q.forUpdate())
        .firstOrFail()

      logger.info({ quantity, productId: params.id }, 'Starting forge operation')

      for (const material of product.rawMaterials) {
        console.log({ material })
        const currentQuantity = Number(material.quantity)

        console.log({ currentQuantity })

        const neededPerUnit = Number(material.$extras?.pivot_quantity_needed ?? 0)

        if (Number.isNaN(currentQuantity) || Number.isNaN(neededPerUnit)) {
          console.log('error 1')
          throw new Error(`Invalid quantity data for raw material ${material.name}`)
        }

        const requiredQuantity = neededPerUnit * quantity

        if (currentQuantity < requiredQuantity) {
          console.log('error 2')
          throw new Error(`Insufficient quantity for raw material ${material.name}`)
        }
      }

      await Promise.all(
        product.rawMaterials.map(async (rm) => {
          const currentQuantity = Number(rm.quantity)
          const neededPerUnit = Number(rm.$extras.pivot_quantity_needed)

          const newQuantity = currentQuantity - neededPerUnit * quantity
          await rm.merge({ quantity: newQuantity.toString() }).useTransaction(trx).save()
        })
      )

      await trx.commit()
      await product.refresh()

      const { data } = await serialize(ProductTransformer.transform(product))

      return response.ok(data)
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
