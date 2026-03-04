/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_token.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_token.store']['types'],
  },
  'auth.access_token.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/auth/logout',
    tokens: [{"old":"/api/v1/auth/logout","type":0,"val":"api","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.access_token.destroy']['types'],
  },
  'products.forge': {
    methods: ["PATCH"],
    pattern: '/api/v1/products/:id/forge',
    tokens: [{"old":"/api/v1/products/:id/forge","type":0,"val":"api","end":""},{"old":"/api/v1/products/:id/forge","type":0,"val":"v1","end":""},{"old":"/api/v1/products/:id/forge","type":0,"val":"products","end":""},{"old":"/api/v1/products/:id/forge","type":1,"val":"id","end":""},{"old":"/api/v1/products/:id/forge","type":0,"val":"forge","end":""}],
    types: placeholder as Registry['products.forge']['types'],
  },
  'products.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/products',
    tokens: [{"old":"/api/v1/products","type":0,"val":"api","end":""},{"old":"/api/v1/products","type":0,"val":"v1","end":""},{"old":"/api/v1/products","type":0,"val":"products","end":""}],
    types: placeholder as Registry['products.index']['types'],
  },
  'products.store': {
    methods: ["POST"],
    pattern: '/api/v1/products',
    tokens: [{"old":"/api/v1/products","type":0,"val":"api","end":""},{"old":"/api/v1/products","type":0,"val":"v1","end":""},{"old":"/api/v1/products","type":0,"val":"products","end":""}],
    types: placeholder as Registry['products.store']['types'],
  },
  'products.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/products/:id',
    tokens: [{"old":"/api/v1/products/:id","type":0,"val":"api","end":""},{"old":"/api/v1/products/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/products/:id","type":0,"val":"products","end":""},{"old":"/api/v1/products/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['products.show']['types'],
  },
  'products.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/products/:id',
    tokens: [{"old":"/api/v1/products/:id","type":0,"val":"api","end":""},{"old":"/api/v1/products/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/products/:id","type":0,"val":"products","end":""},{"old":"/api/v1/products/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['products.update']['types'],
  },
  'products.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/products/:id',
    tokens: [{"old":"/api/v1/products/:id","type":0,"val":"api","end":""},{"old":"/api/v1/products/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/products/:id","type":0,"val":"products","end":""},{"old":"/api/v1/products/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['products.destroy']['types'],
  },
  'raw_materials.seed': {
    methods: ["POST"],
    pattern: '/api/v1/raw-materials/seed',
    tokens: [{"old":"/api/v1/raw-materials/seed","type":0,"val":"api","end":""},{"old":"/api/v1/raw-materials/seed","type":0,"val":"v1","end":""},{"old":"/api/v1/raw-materials/seed","type":0,"val":"raw-materials","end":""},{"old":"/api/v1/raw-materials/seed","type":0,"val":"seed","end":""}],
    types: placeholder as Registry['raw_materials.seed']['types'],
  },
  'raw_materials.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/raw-materials',
    tokens: [{"old":"/api/v1/raw-materials","type":0,"val":"api","end":""},{"old":"/api/v1/raw-materials","type":0,"val":"v1","end":""},{"old":"/api/v1/raw-materials","type":0,"val":"raw-materials","end":""}],
    types: placeholder as Registry['raw_materials.index']['types'],
  },
  'raw_materials.store': {
    methods: ["POST"],
    pattern: '/api/v1/raw-materials',
    tokens: [{"old":"/api/v1/raw-materials","type":0,"val":"api","end":""},{"old":"/api/v1/raw-materials","type":0,"val":"v1","end":""},{"old":"/api/v1/raw-materials","type":0,"val":"raw-materials","end":""}],
    types: placeholder as Registry['raw_materials.store']['types'],
  },
  'raw_materials.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/raw-materials/:id',
    tokens: [{"old":"/api/v1/raw-materials/:id","type":0,"val":"api","end":""},{"old":"/api/v1/raw-materials/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/raw-materials/:id","type":0,"val":"raw-materials","end":""},{"old":"/api/v1/raw-materials/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['raw_materials.show']['types'],
  },
  'raw_materials.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/raw-materials/:id',
    tokens: [{"old":"/api/v1/raw-materials/:id","type":0,"val":"api","end":""},{"old":"/api/v1/raw-materials/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/raw-materials/:id","type":0,"val":"raw-materials","end":""},{"old":"/api/v1/raw-materials/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['raw_materials.update']['types'],
  },
  'raw_materials.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/raw-materials/:id',
    tokens: [{"old":"/api/v1/raw-materials/:id","type":0,"val":"api","end":""},{"old":"/api/v1/raw-materials/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/raw-materials/:id","type":0,"val":"raw-materials","end":""},{"old":"/api/v1/raw-materials/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['raw_materials.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
