import { Item, ItemContent, ItemDescription, ItemTitle } from '#/components/ui/item'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-line text-sea-ink-soft border-t px-4 pt-10 pb-14">
      <section className="my-10 grid gap-6 lg:grid-cols-3" id="colors">
        <Item variant="outline" className="rise-in bg-sea-ink border-none">
          <ItemContent>
            <ItemTitle className="text-foreground">Sea Ink</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-sea-ink-soft border-none">
          <ItemContent>
            <ItemTitle>Sea Ink Soft</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-lagoon border-none">
          <ItemContent>
            <ItemTitle>Lagoon</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-lagoon-deep border-none">
          <ItemContent>
            <ItemTitle>Lagoon Deep</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-palm border-none">
          <ItemContent>
            <ItemTitle>Palm</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-sand border-none">
          <ItemContent>
            <ItemTitle>Sand</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-foam border-none">
          <ItemContent>
            <ItemTitle>Foam</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-surface border-none">
          <ItemContent>
            <ItemTitle>Surface</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-surface-strong border-none">
          <ItemContent>
            <ItemTitle>Surface Strong</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-line border-none">
          <ItemContent>
            <ItemTitle>Line</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="inset-glint rise-in border-none">
          <ItemContent>
            <ItemTitle>inset-glint</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-kicker border-none">
          <ItemContent>
            <ItemTitle>Kicker</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-bg-base border-none">
          <ItemContent>
            <ItemTitle>Background Base</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-header-bg border-none">
          <ItemContent>
            <ItemTitle>Header Background</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-chip-bg border-none">
          <ItemContent>
            <ItemTitle>Chip Background</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-chip-line border-none">
          <ItemContent>
            <ItemTitle>Chip Line</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-link-bg-hover border-none">
          <ItemContent>
            <ItemTitle>Link Background Hover</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-hero-a border-none">
          <ItemContent>
            <ItemTitle>Hero A</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" className="rise-in bg-hero-b border-none">
          <ItemContent>
            <ItemTitle>Hero B</ItemTitle>
            <ItemDescription>Example product description</ItemDescription>
          </ItemContent>
        </Item>
      </section>
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">&copy; {year} Maycon Silva. All rights reserved.</p>
        <p className="island-kicker m-0">Built with TanStack Start</p>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/mayconhenrique/"
          target="_blank"
          rel="noreferrer"
          className="text-sea-ink-soft hover:bg-link-bg-hover hover:text-sea-ink rounded-xl p-2 transition"
        >
          <span className="sr-only">Follow Maycon Silva on LinkedIn</span>

          <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
              fill="currentColor"
            />
            <path
              d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
              fill="currentColor"
            />
            <path
              d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://github.com/marquesmaycon"
          target="_blank"
          rel="noreferrer"
          className="text-sea-ink-soft hover:bg-link-bg-hover hover:text-sea-ink rounded-xl p-2 transition"
        >
          <span className="sr-only">Go to Maycon Silva's GitHub</span>
          <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32">
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
      </div>
    </footer>
  )
}
