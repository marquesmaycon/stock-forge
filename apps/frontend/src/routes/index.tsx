import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'

import { PageTitle } from '#/components/page-title'
import { Button } from '#/components/ui/button'
import { ForgeCard } from '#/features/product/forge-card'
import { api } from '#/lib/api'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const { data: products } = useQuery(api.products.index.queryOptions())

  return (
    <main>
      <PageTitle.Root className="mb-20 flex-wrap">
        <PageTitle.Background />
        <PageTitle.Title
          eyebrow="AdonisJS 7 and TanStack Start"
          title="Stock Forge"
          description="A product inventory management app built with Turbo Repo"
        />
        <div className="flex w-full flex-wrap gap-3">
          <Button
            size="lg"
            className="text-lagoon-deep hover:text-lagoon-deep/50 border-sea-ink/33 bg-hero-a/33 hover:bg-hero-a rounded-full border px-5 py-2.5 text-sm font-semibold no-underline transition hover:-translate-y-0.5"
            asChild
          >
            <Link to="/products">Explore Products</Link>
          </Button>
          <Button
            size="lg"
            className="text-sea-ink hover:bg border-sea-ink/33 hover:border-sea-ink/50 hover:bg-hero-b bg-foam rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
            asChild
          >
            <Link to="/raw-materials">Raw Materials</Link>
          </Button>
        </div>
      </PageTitle.Root>

      <section className="rise-in">
        <h2 className="page-title mb-12 w-full max-w-none text-center font-serif">Forge Products</h2>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products?.map((p, index) => (
            <ForgeCard key={p.id} product={p} animationDelay={index * 90 + 80} />
          ))}
        </ul>
      </section>
    </main>
  )
}
