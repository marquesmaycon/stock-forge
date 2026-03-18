import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.destroy': { paramsTuple?: []; params?: {} }
    'products.index': { paramsTuple?: []; params?: {} }
    'products.store': { paramsTuple?: []; params?: {} }
    'products.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'products.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'products.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'raw_materials.list_all': { paramsTuple?: []; params?: {} }
    'raw_materials.seed': { paramsTuple?: []; params?: {} }
    'raw_materials.index': { paramsTuple?: []; params?: {} }
    'raw_materials.store': { paramsTuple?: []; params?: {} }
    'raw_materials.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'raw_materials.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'raw_materials.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'forges.index': { paramsTuple?: []; params?: {} }
    'forges.store': { paramsTuple?: []; params?: {} }
    'forges.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'products.index': { paramsTuple?: []; params?: {} }
    'products.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'raw_materials.list_all': { paramsTuple?: []; params?: {} }
    'raw_materials.index': { paramsTuple?: []; params?: {} }
    'raw_materials.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'forges.index': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'products.index': { paramsTuple?: []; params?: {} }
    'products.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'raw_materials.list_all': { paramsTuple?: []; params?: {} }
    'raw_materials.index': { paramsTuple?: []; params?: {} }
    'raw_materials.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'forges.index': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.destroy': { paramsTuple?: []; params?: {} }
    'products.store': { paramsTuple?: []; params?: {} }
    'raw_materials.seed': { paramsTuple?: []; params?: {} }
    'raw_materials.store': { paramsTuple?: []; params?: {} }
    'forges.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'products.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'raw_materials.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'products.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'raw_materials.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'products.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'raw_materials.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'forges.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}