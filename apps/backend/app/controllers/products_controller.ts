import Product from '#models/product'
import { productValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const products = await Product.all()

    return response.ok({ products })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(productValidator)

    const product = await Product.create(payload)

    return response.created({ product })
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    return response.ok({ product })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(productValidator)

    const product = await Product.findOrFail(params.id)

    await product.merge(payload).save()

    return response.ok({ product })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    await product.delete()

    return response.noContent()
  }
}
