import { createTuyau } from '@tuyau/core/client'
import { createTuyauReactQueryClient } from '@tuyau/react-query'
import { registry } from '@api-starter-kit/backend/registry'

export const client = createTuyau({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3333',
  registry,
})

export const api = createTuyauReactQueryClient({ client })