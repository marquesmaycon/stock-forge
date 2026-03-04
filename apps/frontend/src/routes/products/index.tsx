import { useInfiniteQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronDown, Plus } from 'lucide-react'
import React from 'react'

import { EmptyForge } from '#/components/empty-forge'
import { PageTitle } from '#/components/page-title'
import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { Button } from '#/components/ui/button'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '#/components/ui/item'
import { Skeleton } from '#/components/ui/skeleton'
import { api } from '#/lib/api'
import { cn } from '#/lib/utils'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    api.products.index.infiniteQueryOptions({}, { initialPageParam: 1, getNextPageParam: (lp) => lp.meta.nextPage }),
  )

  return (
    <main>
      <PageTitle.Root>
        <PageTitle.Background first="from-palm/50" second="from-sea-ink-soft/25" />
        <PageTitle.Title
          title="Products"
          description="A product is an item that is manufactured or refined using raw materials."
        />
        <Button size="lg" asChild variant="secondary">
          <Link to="/products/new">
            New Product <Plus />
          </Link>
        </Button>
      </PageTitle.Root>

      <section>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && (
            <>
              {Array.from({ length: 6 }, (_, i) => (
                <Skeleton key={i} className="bg-sand h-20" />
              ))}
            </>
          )}

          {data?.pages.map((group, index) => (
            <React.Fragment key={index}>
              {group.products.map((product, i) => (
                <li key={product.id}>
                  <Item
                    variant="outline"
                    asChild
                    role="listitem"
                    className="bg-sand rise-in"
                    style={{ animationDelay: `${i * 90 + 80}ms` }}
                  >
                    <Link to="/products/$id" params={{ id: product.id }}>
                      <ItemMedia>
                        <Avatar>
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
            </React.Fragment>
          ))}
        </ul>

        <div className="rise-in mt-8 flex">
          <Button
            onClick={() => fetchNextPage()}
            className="mx-auto"
            loading={isFetchingNextPage || isLoading}
            disabled={!hasNextPage}
            variant="outline"
          >
            {hasNextPage ? 'Load more ' : 'Nothing more to load'}
            <ChevronDown className={cn(!hasNextPage && 'hidden')} />
          </Button>
        </div>
      </section>

      {data?.pages[0].products.length === 0 && <EmptyForge />}
    </main>
  )
}
