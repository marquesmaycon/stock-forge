import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Plus } from 'lucide-react'

import { PageTitle } from '#/components/page-title'
import { Avatar, AvatarFallback, AvatarImage } from '#/components/ui/avatar'
import { Button } from '#/components/ui/button'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '#/components/ui/item'
import { api } from '#/lib/api'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: products } = useQuery(api.products.index.queryOptions())

  return (
    <main>
      <PageTitle.Root>
        <PageTitle.Background first="from-palm/50" second="from-sea-ink-soft/25" />
        <PageTitle.Title
          title="Products"
          description="A product is an item that is manufactured or refined using raw materials."
        />
        <Link to="/products/new">
          <Button size="lg">
            New Product <Plus />
          </Button>
        </Link>
      </PageTitle.Root>

      <section>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.data.map((product, i) => (
            <li key={product.id}>
              <Item
                variant="outline"
                asChild
                role="listitem"
                className="bg-lagoon/50 dark:bg-surface/75 rise-in"
                style={{ animationDelay: `${i * 90 + 80}ms` }}
              >
                <Link to="/products/$id" params={{ id: product.id }}>
                  <ItemMedia>
                    <Avatar>
                      <AvatarImage
                        src={`./images/lagoon-${Math.floor(Math.random() * 5) + 1}.svg`}
                        className="object-cover"
                      />
                      <AvatarFallback>{product.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="line-clamp-1">{product.name}</ItemTitle>
                    <ItemDescription>{product.price}</ItemDescription>
                  </ItemContent>
                  <ItemContent className="flex-none text-center">
                    <ItemDescription>{product.rawMaterials.length || 0} raw materials</ItemDescription>
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
