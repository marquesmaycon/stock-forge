import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import { RawMaterialForm } from '#/features/raw-material/raw-material-form'
import { api } from '#/lib/api'

export const Route = createFileRoute('/raw-materials/_/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  const { data: rawMaterial } = useQuery(api.rawMaterials.show.queryOptions({ params: { id } }))

  return (
    <main>
      <h1 className="page-title">{rawMaterial?.name}</h1>

      <RawMaterialForm rawMaterial={rawMaterial} />
    </main>
  )
}
