import RawMaterial from '#models/raw_material'
import RawMaterialTransformer from '#transformers/raw_material_transformer'
import { rawMaterialValidator } from '#validators/raw_material'
import type { HttpContext } from '@adonisjs/core/http'

export default class RawMaterialsController {
  /**
   * Display a list of resource
   */
  async index({ response, serialize }: HttpContext) {
    const rawMaterials = await RawMaterial.query().withAggregate('products', (query) =>
      query.count('*').as('products_count')
    )

    const { data } = await serialize(RawMaterialTransformer.transform(rawMaterials))

    return response.ok(data)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, serialize }: HttpContext) {
    const payload = await request.validateUsing(rawMaterialValidator)

    const rawMaterial = await RawMaterial.create(payload)

    const { data } = await serialize(RawMaterialTransformer.transform(rawMaterial))

    return response.created(data)
  }

  /**
   * Show individual record
   */
  async show({ params, response, serialize }: HttpContext) {
    const rawMaterial = await RawMaterial.findOrFail(params.id)

    const { data } = await serialize(RawMaterialTransformer.transform(rawMaterial))

    return response.ok(data)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(rawMaterialValidator)

    const rawMaterial = await RawMaterial.findOrFail(params.id)

    await rawMaterial.merge(payload).save()

    return response.ok({ rawMaterial })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const rawMaterial = await RawMaterial.findOrFail(params.id)

    await rawMaterial.delete()

    return response.noContent()
  }
}
