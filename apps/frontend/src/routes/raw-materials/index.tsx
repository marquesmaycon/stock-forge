import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Plus } from 'lucide-react'

import { EmptyForge } from '#/components/empty-forge'
import { PageTitle } from '#/components/page-title'
import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { Button } from '#/components/ui/button'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '#/components/ui/item'
import { Skeleton } from '#/components/ui/skeleton'
import { api } from '#/lib/api'

export const Route = createFileRoute('/raw-materials/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: rawMaterials, isLoading } = useQuery(api.rawMaterials.index.queryOptions())

  return (
    <main>
      <PageTitle.Root>
        <PageTitle.Background first="from-sea-ink-soft/50" second="from-palm/25" />
        <PageTitle.Title
          title="Raw Materials"
          description="Manage your raw materials here. You can add new materials, edit existing ones, and keep track of their usage in your products."
        />
        <Button size="lg" asChild variant="secondary">
          <Link to="/raw-materials/new">
            New Raw Material <Plus />
          </Link>
        </Button>
      </PageTitle.Root>

      <section>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && (
            <>
              {Array.from({ length: 9 }, (_, i) => (
                <Skeleton key={i} className="bg-sand h-20" />
              ))}
            </>
          )}

          {rawMaterials?.map((material, i) => (
            <li key={material.id}>
              <Item
                variant="outline"
                asChild
                role="listitem"
                className="bg-sand rise-in"
                style={{ animationDelay: `${i * 90 + 80}ms` }}
              >
                <Link to="/raw-materials/$id" params={{ id: material.id }}>
                  <ItemMedia>
                    <Avatar className="">
                      <AvatarFallback>{material.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="line-clamp-1">{material.name}</ItemTitle>
                    <ItemDescription>{material.quantity}</ItemDescription>
                  </ItemContent>
                  <ItemContent className="flex-none text-center">
                    <ItemDescription>used in {material.productsUsing} products</ItemDescription>
                  </ItemContent>
                </Link>
              </Item>
            </li>
          ))}
        </ul>
      </section>

      {rawMaterials?.length == 0 && <EmptyForge />}
    </main>
  )
}
