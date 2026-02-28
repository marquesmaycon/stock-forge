/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessToken: {
      store: typeof routes['auth.access_token.store']
      destroy: typeof routes['auth.access_token.destroy']
    }
  }
  products: {
    index: typeof routes['products.index']
    store: typeof routes['products.store']
    show: typeof routes['products.show']
    update: typeof routes['products.update']
    destroy: typeof routes['products.destroy']
  }
  rawMaterials: {
    index: typeof routes['raw_materials.index']
    store: typeof routes['raw_materials.store']
    show: typeof routes['raw_materials.show']
    update: typeof routes['raw_materials.update']
    destroy: typeof routes['raw_materials.destroy']
  }
}
