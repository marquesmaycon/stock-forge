import factory from '@adonisjs/lucid/factories'
import RawMaterial from '#models/raw_material'
import { ProductFactory } from './product_factory.ts'

export const RawMaterialFactory = factory
  .define(RawMaterial, async ({ faker }) => {
    return {
      name: faker.commerce.productMaterial(),
      quantity: faker.number
        .float({
          min: 300,
          max: 3000,
          fractionDigits: 3,
        })
        .toString(),
    }
  })
  .relation('products', () => ProductFactory)
  .build()
