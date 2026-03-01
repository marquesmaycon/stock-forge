import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { Button } from '#/components/ui/button'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '#/components/ui/item'
import { api } from '#/lib/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Plus } from 'lucide-react'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: products } = useSuspenseQuery(api.products.index.queryOptions())

  return (
    <main className="page-wrap pt-14">
      <div className="mb-10 flex justify-between items-center">
        <div className="">
          <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
            Products
          </h1>
          <p className="mb-8 max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg">
            A product is an item that is manufactured or refined using raw
            materials.
          </p>
        </div>
        <Link to="/products/new">
          <Button>
            New Product <Plus />
          </Button>
        </Link>
      </div>

      <section>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.data.map((product) => (
            <li key={product.id}>
              <Item
                variant="outline"
                asChild
                role="listitem"
                className="bg-lagoon/50"
              >
                <Link to="/products/$id" params={{ id: product.id }}>
                  <ItemMedia>
                    <Avatar className="">
                      <AvatarFallback>
                        {product.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="line-clamp-1">
                      {product.name}
                    </ItemTitle>
                    <ItemDescription>{product.price}</ItemDescription>
                  </ItemContent>
                  <ItemContent className="flex-none text-center">
                    <ItemDescription>
                      {product.rawMaterials?.length || 0} raw materials
                    </ItemDescription>
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
