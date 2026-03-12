import { ProductSchema } from '#database/schema'
import { hasMany, manyToMany } from '@adonisjs/lucid/orm'
import RawMaterial from './raw_material.ts'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Forge from './forge.ts'

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

  @hasMany(() => Forge)
  declare forges: HasMany<typeof Forge>
}
