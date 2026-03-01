import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Plus } from 'lucide-react'

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
      <div className="mb-10 flex justify-between items-center">
        <div className="">
          <h1 className="page-title">Raw Materials</h1>
          <p className="mb-8 max-w-2xl text-base text-sea-ink-soft sm:text-lg">
            A product is an item that is manufactured or refined using raw materials.
          </p>
        </div>
        <Link to="/raw-materials/new">
          <Button>
            New Raw Material <Plus />
          </Button>
        </Link>
      </div>

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
