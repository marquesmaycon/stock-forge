import { RawmaterialService } from '#services/rawmaterial_service'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await RawmaterialService.seedRawMaterials()
  }
}
