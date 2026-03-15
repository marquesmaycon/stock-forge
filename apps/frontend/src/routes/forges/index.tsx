import { createFileRoute } from '@tanstack/react-router'

import { PageTitle } from '#/components/page-title'
import { ForgesTable } from '#/features/forge/forges-table'

export const Route = createFileRoute('/forges/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <PageTitle.Root>
        <PageTitle.Background first="from-palm/50" second="from-sea-ink-soft/25" />
        <PageTitle.Title title="Forges" description="All forged products" />
      </PageTitle.Root>

      <ForgesTable />
    </main>
  )
}
