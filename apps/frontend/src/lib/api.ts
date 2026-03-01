import { createTuyau } from '@tuyau/core/client'
import { registry } from '@api-starter-kit/backend/registry'

export const api = createTuyau({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3333',
  registry,
})
