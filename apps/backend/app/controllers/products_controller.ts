import Product from '#models/product'
import ProductTransformer from '#transformers/product_transformer'
import { productValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'
import type { Infer } from '@vinejs/vine/types'

export default class ProductsController {
  /**
   * Display a list of resource
   */
  async index({ serialize, response }: HttpContext) {
    const products = await Product.query().preload('rawMaterials')

    const data = await serialize(ProductTransformer.transform(products))

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

    const data = await serialize(ProductTransformer.transform(product))

    return response.created(data)
  }

  /**
   * Show individual record
   */
  async show({ params, serialize, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    await product.load('rawMaterials')

    const { data: productData } = await serialize(ProductTransformer.transform(product))

    return response.ok(productData)
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

    const data = await serialize(ProductTransformer.transform(product))

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
