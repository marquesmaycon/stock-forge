/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.new_account.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>>
    }
  }
  'auth.access_token.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_token_controller').default['store']>>>
    }
  }
  'auth.access_token.destroy': {
    methods: ["POST"]
    pattern: '/api/v1/auth/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_token_controller').default['destroy']>>>
    }
  }
  'products.forge': {
    methods: ["PATCH"]
    pattern: '/api/v1/products/:id/forge'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/products_controller').default['forge']>>>
    }
  }
  'products.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/products'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: ExtractQueryForGet<InferInput<(typeof import('#validators/pagination').paginationValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/products_controller').default['index']>>>
    }
  }
  'products.store': {
    methods: ["POST"]
    pattern: '/api/v1/products'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/product').productValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/product').productValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/products_controller').default['store']>>>
    }
  }
  'products.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/products/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/products_controller').default['show']>>>
    }
  }
  'products.update': {
    methods: ["PUT","PATCH"]
    pattern: '/api/v1/products/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/product').productValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/product').productValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/products_controller').default['update']>>>
    }
  }
  'products.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/products/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/products_controller').default['destroy']>>>
    }
  }
  'raw_materials.list_all': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/raw-materials/list-all'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/raw_materials_controller').default['listAll']>>>
    }
  }
  'raw_materials.seed': {
    methods: ["POST"]
    pattern: '/api/v1/raw-materials/seed'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/raw_materials_controller').default['seed']>>>
    }
  }
  'raw_materials.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/raw-materials'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: ExtractQueryForGet<InferInput<(typeof import('#validators/pagination').paginationValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/raw_materials_controller').default['index']>>>
    }
  }
  'raw_materials.store': {
    methods: ["POST"]
    pattern: '/api/v1/raw-materials'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/raw_material').rawMaterialValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/raw_material').rawMaterialValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/raw_materials_controller').default['store']>>>
    }
  }
  'raw_materials.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/raw-materials/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/raw_materials_controller').default['show']>>>
    }
  }
  'raw_materials.update': {
    methods: ["PUT","PATCH"]
    pattern: '/api/v1/raw-materials/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/raw_material').rawMaterialValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/raw_material').rawMaterialValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/raw_materials_controller').default['update']>>>
    }
  }
  'raw_materials.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/raw-materials/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/raw_materials_controller').default['destroy']>>>
    }
  }
  'forges.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/forges'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: ExtractQueryForGet<InferInput<(typeof import('#validators/pagination').paginationValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/forges_controller').default['index']>>>
    }
  }
  'forges.store': {
    methods: ["POST"]
    pattern: '/api/v1/forges'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/forge').forgeValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/forge').forgeValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/forges_controller').default['store']>>>
    }
  }
  'forges.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/forges/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/forges_controller').default['destroy']>>>
    }
  }
}
