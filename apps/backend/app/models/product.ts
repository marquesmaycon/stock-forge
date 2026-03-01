import { ProductSchema } from '#database/schema'
import { manyToMany } from '@adonisjs/lucid/orm'
import RawMaterial from './raw_material.ts'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Product extends ProductSchema {
  @manyToMany(() => RawMaterial, {
    pivotTable: 'product_raw_materials',
    pivotColumns: ['quantity_needed'],
    pivotTimestamps: {
      createdAt: 'created_at',
      updatedAt: false,
    },
  })
  declare rawMaterials: ManyToMany<typeof RawMaterial>
}
