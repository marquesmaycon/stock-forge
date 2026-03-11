import type { Route } from '@tuyau/core/types'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateProduction(product: Route.Response<'products.index'>['products'][number]): number {
  const possibleAmounts = product.rawMaterials.map((rm) => {
    const available = parseFloat(rm.quantity)
    const needed = parseFloat(rm.quantity_needed)

    return available / needed
  })

  return Math.floor(Math.min(...possibleAmounts))
}

export async function pause(ms = 600) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}