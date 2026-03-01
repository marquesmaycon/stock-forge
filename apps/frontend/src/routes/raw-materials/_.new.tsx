import { createFileRoute } from '@tanstack/react-router'

import { RawMaterialForm } from '#/features/raw-material/raw-material-form'

export const Route = createFileRoute('/raw-materials/_/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <h1 className="page-title">New Raw Material</h1>
      <RawMaterialForm />
    </main>
  )
}
