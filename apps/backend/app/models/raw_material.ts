import { RawMaterialSchema } from '#database/schema'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Product from './product.ts'
import { manyToMany } from '@adonisjs/lucid/orm'

export default class RawMaterial extends RawMaterialSchema {
  @manyToMany(() => Product, {
    pivotTable: 'product_raw_materials',
    pivotColumns: ['quantity_needed'],
  })
  declare products: ManyToMany<typeof Product>
}
