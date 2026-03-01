import { ProductForm } from '#/features/product/product-form'
import { api } from '#/lib/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/_/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  const { data: product, isLoading } = useQuery(
    api.products.show.queryOptions({ params: { id } }),
  )

  return (
    <main className="page-wrap pt-14">
      <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
        {product?.name}
      </h1>

      <ProductForm id={id} />
    </main>
  )
}
