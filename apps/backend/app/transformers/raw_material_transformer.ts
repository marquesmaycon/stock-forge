import { BaseTransformer } from '@adonisjs/core/transformers'
import type RawMaterial from '#models/raw_material'
import ProductTransformer from './product_transformer.ts'

export default class RawMaterialTransformer extends BaseTransformer<RawMaterial> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'name', 'quantity']),
      quantity_needed: this.resource.$extras.pivot_quantity_needed,
      product: ProductTransformer.transform(this.resource.products),
    }
  }
}
