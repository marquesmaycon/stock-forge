import RawMaterial from '#models/raw_material'
import { rawMaterialValidator } from '#validators/raw_material'
import type { HttpContext } from '@adonisjs/core/http'

export default class RawMaterialsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const rawMaterials = await RawMaterial.all()

    return response.ok({ rawMaterials })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(rawMaterialValidator)

    const rawMaterial = await RawMaterial.create(payload)

    return response.created({ rawMaterial })
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const rawMaterial = await RawMaterial.findOrFail(params.id)

    return response.ok({ rawMaterial })
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
