import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import { PageTitle } from '#/components/page-title'
import { ProductForm } from '#/features/product/product-form'
import { api } from '#/lib/api'

export const Route = createFileRoute('/products/_/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  const { data: product, isLoading } = useQuery(api.products.show.queryOptions({ params: { id } }))

  return (
    <main>
      <PageTitle.Root>
        <PageTitle.Title title={product?.name || ''} description={`$ ${product?.price || 0}`} eyebrow="Product" />
        <PageTitle.BackButton to="/products" />
      </PageTitle.Root>

      <ProductForm product={product} />
    </main>
  )
}
