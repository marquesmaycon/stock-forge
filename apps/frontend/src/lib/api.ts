import { registry } from '@stock-forge/api-contract/registry'
import { createTuyau } from '@tuyau/core/client'
import { createTuyauReactQueryClient } from '@tuyau/react-query'

export const client = createTuyau({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3333',
  registry: registry,
})

export const api = createTuyauReactQueryClient({ client })
