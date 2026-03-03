import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import { PageTitle } from '#/components/page-title'
import { RawMaterialForm } from '#/features/raw-material/raw-material-form'
import { api } from '#/lib/api'

export const Route = createFileRoute('/raw-materials/_/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  const { data: rawMaterial, isLoading } = useQuery(api.rawMaterials.show.queryOptions({ params: { id } }))

  return (
    <main>
      <PageTitle.Root>
        <PageTitle.Title title={rawMaterial?.name || ''} description={rawMaterial?.quantity} eyebrow="Raw Material" />
        <PageTitle.BackButton to="/raw-materials" />
      </PageTitle.Root>

      <RawMaterialForm rawMaterial={rawMaterial} />
    </main>
  )
}
