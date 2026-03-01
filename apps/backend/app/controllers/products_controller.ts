import Product from '#models/product'
import ProductTransformer from '#transformers/product_transformer'
import { productValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'
import type { Infer } from '@vinejs/vine/types'

export default class ProductsController {
  /**
   * Display a list of resource
   */
  async index({ serialize }: HttpContext) {
    const products = await Product.query().preload('rawMaterials')

    return serialize(ProductTransformer.transform(products))
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, serialize }: HttpContext) {
    const { rawMaterials, ...payload } = await request.validateUsing(productValidator)

    const product = await Product.create(payload)

    await product.related('rawMaterials').attach(this.transformRawMaterials(rawMaterials))

    await product.load('rawMaterials')

    response.status(201)

    return serialize(ProductTransformer.transform(product))
  }

  /**
   * Show individual record
   */
  async show({ params, serialize }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    return serialize(ProductTransformer.transform(product))
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, serialize }: HttpContext) {
    const { rawMaterials, ...payload } = await request.validateUsing(productValidator)

    const product = await Product.findOrFail(params.id)

    await product
      .merge(payload)
      .related('rawMaterials')
      .sync(this.transformRawMaterials(rawMaterials))

    await product.load('rawMaterials')

    return serialize(ProductTransformer.transform(product))
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    await product.delete()

    return response.noContent()
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
