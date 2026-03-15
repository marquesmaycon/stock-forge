import { BaseTransformer } from '@adonisjs/core/transformers'
import type Forge from '#models/forge'
import ProductTransformer from './product_transformer.ts'

export default class ForgeTransformer extends BaseTransformer<Forge> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'productId', 'createdAt']),
      product: ProductTransformer.transform(this.resource.product),
    }
  }
}
