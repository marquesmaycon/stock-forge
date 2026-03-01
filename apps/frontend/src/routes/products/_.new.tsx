import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/_/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/demo/products/new"! s</div>
}
