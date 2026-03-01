import { api } from '#/lib/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: products, isLoading } = useSuspenseQuery(
    api.products.index.queryOptions(),
  )

  if (isLoading) {
    return <main className="page-wrap">Loading products...</main>
  }

  return (
    <main className="page-wrap">
      Hello "/products"!
      <pre>
        <code>{JSON.stringify(products, null, 2)}</code>
      </pre>
    </main>
  )
}
