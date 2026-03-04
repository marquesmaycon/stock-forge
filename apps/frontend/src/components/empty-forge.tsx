import { useMutation } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { Anvil, ArrowUpRight, Leaf } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { api } from '#/lib/api'

export function EmptyForge() {
  const { mutateAsync: seed, isPending } = useMutation({
    ...api.rawMaterials.seed.mutationOptions(),
    onSuccess: () => {
      toast.success('Seed successfully completed!')
    },
    onError: () => {
      toast.error('Error while seeding database')
    },
    onSettled: (_, __, ___, ____, { client }) => {
      client.invalidateQueries()
    },
  })
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Anvil />
        </EmptyMedia>
        <EmptyTitle>No recipes yet</EmptyTitle>
        <EmptyDescription className="text-balance">
          You haven&apos;t created any products and/or raw materials. Get started running the seed or creating one.
        </EmptyDescription>
      </EmptyHeader>
      <Button onClick={() => seed({})} loading={isPending}>
        Run Seed <Leaf />
      </Button>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button asChild variant="link">
          <Link to="/products/new">
            Create Product
            <ArrowUpRight />
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link to="/raw-materials/new">
            Create Raw Material
            <ArrowUpRight />
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  )
}
