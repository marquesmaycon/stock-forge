import { createFileRoute, Link } from '@tanstack/react-router'

import { PageTitle } from '#/components/page-title'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <PageTitle.Root className="flex-wrap">
        <PageTitle.Background />
        <PageTitle.Title
          eyebrow="AdonisJS 7 and TanStack Start"
          title="Stock Forge"
          description="A product inventory management app built with Turbo Repo"
        />
        <div className="flex flex-wrap gap-3 w-full">
          <Link
            to="/products"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-lagoon-deep no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            Explore Products
          </Link>
          <Link
            to="/raw-materials"
            className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-sea-ink no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
          >
            Raw Materials
          </Link>
        </div>
      </PageTitle.Root>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Type-Safe Routing', 'Routes and links stay in sync across every page.'],
          ['Server Functions', 'Call server code from your UI without creating API boilerplate.'],
          ['Streaming by Default', 'Ship progressively rendered responses for faster experiences.'],
          ['Tailwind Native', 'Design quickly with utility-first styling and custom tokens.'],
        ].map(([title, desc], index) => (
          <article
            key={title}
            className="island-shell feature-card rise-in rounded-2xl p-5"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <h2 className="mb-2 text-base font-semibold text-sea-ink">{title}</h2>
            <p className="m-0 text-sm text-sea-ink-soft">{desc}</p>
          </article>
        ))}
      </section>

      <section className="island-shell mt-8 rounded-2xl p-6">
        <p className="island-kicker mb-2">Quick Start</p>
        <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-sea-ink-soft">
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
