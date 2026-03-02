import { createFileRoute } from '@tanstack/react-router'

import { PageTitle } from '#/components/page-title'
import { ProductForm } from '#/features/product/product-form'

export const Route = createFileRoute('/products/_/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <PageTitle.Root>
        <PageTitle.Title title="New Product" description="Create a new product by filling out the form below." />
        <PageTitle.BackButton to="/products" />
      </PageTitle.Root>
      <ProductForm />
    </main>
  )
}
