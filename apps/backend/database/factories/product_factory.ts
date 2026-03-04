import factory from '@adonisjs/lucid/factories'
import Product from '#models/product'
import { RawMaterialFactory } from './raw_material_factory.ts'

export const ProductFactory = factory
  .define(Product, async ({ faker }) => {
    return {
      name: faker.commerce.product(),
      price: faker.number.float({ min: 50, max: 2000 }).toString(),
    }
  })
  .relation('rawMaterials', () => RawMaterialFactory)
  .build()
