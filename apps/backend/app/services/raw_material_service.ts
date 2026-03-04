import { RawMaterialFactory } from '#database/factories/raw_material_factory'
import { faker } from '@faker-js/faker'

export class RawMaterialService {
  static async seedRawMaterials() {
    const generateQuantity = () => faker.number.bigInt({ min: 1, max: 70 }).toString()
    await RawMaterialFactory.with('products', 3, (pd) => {
      pd.pivotAttributes([
        {
          quantity_needed: generateQuantity(),
        },
        {
          quantity_needed: generateQuantity(),
        },
        {
          quantity_needed: generateQuantity(),
        },
      ])
    }).createMany(5)
  }
}
