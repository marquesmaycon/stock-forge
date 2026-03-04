import { RawMaterialService } from '#services/raw_material_service'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await RawMaterialService.seedRawMaterials()
  }
}
