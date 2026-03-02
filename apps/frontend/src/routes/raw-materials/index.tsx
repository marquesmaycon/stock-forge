import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Plus } from 'lucide-react'

import { PageTitle } from '#/components/page-title'
import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { Button } from '#/components/ui/button'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '#/components/ui/item'
import { api } from '#/lib/api'

export const Route = createFileRoute('/raw-materials/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: rawMaterials } = useQuery(api.rawMaterials.index.queryOptions())

  return (
    <main>
      <PageTitle.Root>
        <PageTitle.Background first="from-lagoon/50" second="from-palm/25" />
        <PageTitle.Title
          title="Raw Materials"
          description="A product is an item that is manufactured or refined using raw materials."
        />
        <Link to="/raw-materials/new">
          <Button size="lg">
            New Raw Material <Plus />
          </Button>
        </Link>
      </PageTitle.Root>

      <section>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rawMaterials?.map((material) => (
            <li key={material.id}>
              <Item variant="outline" asChild role="listitem" className="bg-lagoon/50 dark:bg-palm/20">
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
    </main>
  )
}
