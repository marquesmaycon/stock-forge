import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'

import { PageTitle } from '#/components/page-title'
import { Button } from '#/components/ui/button'
import { RawMaterialForm } from '#/features/raw-material/raw-material-form'
import { api } from '#/lib/api'

export const Route = createFileRoute('/raw-materials/_/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  const { data: rawMaterial } = useQuery(api.rawMaterials.show.queryOptions({ params: { id } }))

  return (
    <main className="space-y-8">
      <PageTitle.Root>
        <PageTitle.Title title={rawMaterial?.name || ''} description={rawMaterial?.quantity} eyebrow="Raw Material" />
        <PageTitle.BackButton to="/raw-materials" />
      </PageTitle.Root>

      <RawMaterialForm rawMaterial={rawMaterial} />

      <div className="bg-background rise-in space-y-4 rounded-lg border px-4 py-6">
        <h3>Used in:</h3>
        <ul className="flex flex-wrap items-center">
          {rawMaterial?.products?.map((p) => (
            <li key={p.id}>
              <Button variant="link">
                <Link to="/products/$id" params={{ id: p.id }}>
                  {p.name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
