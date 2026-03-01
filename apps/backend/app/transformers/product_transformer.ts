import { BaseTransformer } from '@adonisjs/core/transformers'
import type Product from '#models/product'
import RawMaterialTransformer from './raw_material_transformer.ts'

export default class ProductTransformer extends BaseTransformer<Product> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'name', 'price']),
      rawMaterials: RawMaterialTransformer.transform(this.whenLoaded(this.resource.rawMaterials)),
    }
  }
}
