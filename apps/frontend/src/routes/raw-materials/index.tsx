import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/raw-materials/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/raw-materials"!</div>
}
