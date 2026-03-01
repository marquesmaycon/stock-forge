import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '#/components/ui/item'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rise-in relative overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
        <p className="island-kicker mb-3">AdonisJS 7 and TanStack Start</p>
        <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
          Stock Forge
        </h1>
        <p className="mb-8 max-w-2xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
          A product inventory management app built with Turbo Repo
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/blog"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            Explore Posts
          </a>
          <a
            href="https://tanstack.com/router"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
          >
            Router Guide
          </a>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [
            'Type-Safe Routing',
            'Routes and links stay in sync across every page.',
          ],
          [
            'Server Functions',
            'Call server code from your UI without creating API boilerplate.',
          ],
          [
            'Streaming by Default',
            'Ship progressively rendered responses for faster experiences.',
          ],
          [
            'Tailwind Native',
            'Design quickly with utility-first styling and custom tokens.',
          ],
        ].map(([title, desc], index) => (
          <article
            key={title}
            className="island-shell feature-card rise-in rounded-2xl p-5"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <h2 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
              {title}
            </h2>
            <p className="m-0 text-sm text-[var(--sea-ink-soft)]">{desc}</p>
          </article>
        ))}
      </section>

      <section className="my-10 space-y-4 grid lg:grid-cols-3" id="colors">
        <Item variant="outline" className="bg-sea-ink">
          <ItemContent>
            <ItemTitle className="text-foreground">Sea Ink</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-sea-ink-soft">
          <ItemContent>
            <ItemTitle>Sea Ink Soft</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-lagoon">
          <ItemContent>
            <ItemTitle>Lagoon</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-lagoon-deep">
          <ItemContent>
            <ItemTitle>Lagoon Deep</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-palm">
          <ItemContent>
            <ItemTitle>Palm</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-sand">
          <ItemContent>
            <ItemTitle>Sand</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-foam">
          <ItemContent>
            <ItemTitle>Foam</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-surface">
          <ItemContent>
            <ItemTitle>Surface</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-surface-strong">
          <ItemContent>
            <ItemTitle>Surface Strong</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-line">
          <ItemContent>
            <ItemTitle>Line</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="inset-glint">
          <ItemContent>
            <ItemTitle>inset-glint</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-kicker">
          <ItemContent>
            <ItemTitle>Kicker</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-bg-base">
          <ItemContent>
            <ItemTitle>Background Base</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-header-bg">
          <ItemContent>
            <ItemTitle>Header Background</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-chip-bg">
          <ItemContent>
            <ItemTitle>Chip Background</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-chip-line">
          <ItemContent>
            <ItemTitle>Chip Line</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-link-bg-hover">
          <ItemContent>
            <ItemTitle>Link Background Hover</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-hero-a">
          <ItemContent>
            <ItemTitle>Hero A</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="bg-hero-b">
          <ItemContent>
            <ItemTitle>Hero B</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
      </section>

      <section className="island-shell mt-8 rounded-2xl p-6">
        <p className="island-kicker mb-2">Quick Start</p>
        <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-[var(--sea-ink-soft)]">
          <li>
            Edit <code>src/routes/index.tsx</code> to customize the hero and
            product narrative.
          </li>
          <li>
            Update <code>src/components/Header.tsx</code> and{' '}
            <code>src/components/Footer.tsx</code> for brand links.
          </li>
          <li>
            Add routes in <code>src/routes</code> and tweak visual tokens in{' '}
            <code>src/styles.css</code>.
          </li>
        </ul>
      </section>
    </main>
  )
}
