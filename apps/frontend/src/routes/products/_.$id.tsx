import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import { ProductForm } from '#/features/product/product-form'
import { api } from '#/lib/api'

export const Route = createFileRoute('/products/_/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  const { data: product, isLoading } = useQuery(
    api.products.show.queryOptions({ params: { id } }),
  )

  return (
    <main>
      <h1 className="page-title">{product?.name}</h1>

      <ProductForm product={product} />
    </main>
  )
}
