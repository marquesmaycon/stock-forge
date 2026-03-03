import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Anvil, ArrowRight, Minus, Plus } from 'lucide-react'

import { PageTitle } from '#/components/page-title'
import { Avatar, AvatarFallback, AvatarImage } from '#/components/ui/avatar'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { ButtonGroup } from '#/components/ui/button-group'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '#/components/ui/card'
import { Item, ItemActions, ItemContent, ItemHeader, ItemTitle } from '#/components/ui/item'
import { api } from '#/lib/api'
import { calculateProduction, cn } from '#/lib/utils'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const { data: products } = useQuery(api.products.index.queryOptions())
  return (
    <main>
      <PageTitle.Root className="flex-wrap">
        <PageTitle.Background />
        <PageTitle.Title
          eyebrow="AdonisJS 7 and TanStack Start"
          title="Stock Forge"
          description="A product inventory management app built with Turbo Repo"
        />
        <div className="flex w-full flex-wrap gap-3">
          <Link
            to="/products"
            className="text-lagoon-deep rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            Explore Products
          </Link>
          <Link
            to="/raw-materials"
            className="text-sea-ink rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
          >
            Raw Materials
          </Link>
        </div>
      </PageTitle.Root>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products?.data.map((p, index) => {
          const production = calculateProduction(p)
          return (
            <Card className="bg-surface rise-in" style={{ animationDelay: `${index * 90 + 80}ms` }}>
              <CardHeader>
                <CardAction>
                  <Badge variant="secondary" className="bg-kicker text-sand">
                    $ {p.price}
                  </Badge>
                </CardAction>
                <CardTitle className="flex items-center gap-3">
                  <Avatar className="size-6">
                    <AvatarImage
                      src={`./images/lagoon-${Math.floor(Math.random() * 5) + 1}.svg`}
                      className="object-cover"
                    />
                    <AvatarFallback>{p.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-sea-ink text-lg font-bold">{p.name}</h2>
                </CardTitle>
                <CardDescription>Stock: 2</CardDescription>
              </CardHeader>
              <CardContent className="flex h-full flex-col items-center space-y-6">
                <h3 className="text-sea-ink-soft text-center text-lg font-semibold">Raw Materials</h3>

                <ul className="w-full space-y-2">
                  {p.rawMaterials.map((rm) => (
                    <li key={rm.id} className="flex flex-col">
                      <Item variant="outline">
                        <ItemHeader>
                          <ItemTitle className="text-sea-ink-soft">{rm.name}</ItemTitle>
                        </ItemHeader>
                        <ItemContent>
                          <span className="text-sea-ink-soft">Needed: {rm.quantity}</span>
                          <span className="text-sea-ink-soft">Available: {rm.quantity_needed}</span>
                        </ItemContent>
                        <ItemActions>
                          <Button asChild variant="link" size="sm">
                            <Link to="/raw-materials/$id" params={{ id: rm.id }}>
                              See <ArrowRight />
                            </Link>
                          </Button>
                        </ItemActions>
                      </Item>
                    </li>
                  ))}
                </ul>

                <Badge
                  variant="secondary"
                  className={cn('text-sand mt-auto', production > 0 ? 'bg-lagoon-deep' : 'bg-line')}
                >
                  Max. Production: {production}
                </Badge>
              </CardContent>

              <CardFooter className="mt-auto">
                <ButtonGroup className="w-full flex-1">
                  <Button variant="secondary">
                    <Minus />
                  </Button>
                  <Button variant="secondary" className="flex-1">
                    <Anvil />
                    Forge 1
                  </Button>
                  <Button variant="secondary">
                    <Plus />
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          )
        })}
      </section>

      <section className="island-shell mt-8 rounded-2xl p-6">
        <p className="island-kicker mb-2">Quick Start</p>
        <ul className="text-sea-ink-soft m-0 list-disc space-y-2 pl-5 text-sm">
          <li>
            Edit <code>src/routes/index.tsx</code> to customize the hero and product narrative.
          </li>
          <li>
            Update <code>src/components/Header.tsx</code> and <code>src/components/Footer.tsx</code> for brand links.
          </li>
          <li>
            Add routes in <code>src/routes</code> and tweak visual tokens in <code>src/styles.css</code>.
          </li>
        </ul>
      </section>
    </main>
  )
}
