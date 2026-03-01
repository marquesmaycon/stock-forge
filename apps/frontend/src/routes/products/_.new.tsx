import { createFileRoute } from '@tanstack/react-router'

import { ProductForm } from '#/features/product/product-form'

export const Route = createFileRoute('/products/_/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <h1 className="page-title">New Product</h1>
      <ProductForm />
    </main>
  )
}
