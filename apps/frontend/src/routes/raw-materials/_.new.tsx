import { createFileRoute } from '@tanstack/react-router'

import { PageTitle } from '#/components/page-title'
import { RawMaterialForm } from '#/features/raw-material/raw-material-form'

export const Route = createFileRoute('/raw-materials/_/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <PageTitle.Root>
        <PageTitle.Title
          title="New Raw Material"
          description="Create a new raw material by filling out the form below."
          eyebrow="Raw Material"
        />
        <PageTitle.BackButton to="/raw-materials" />
      </PageTitle.Root>
      <RawMaterialForm />
    </main>
  )
}
