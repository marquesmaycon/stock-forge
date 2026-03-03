import { useMutation } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import type { Route } from '@tuyau/core/types'
import { Anvil, ArrowRight, Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { ButtonGroup } from '#/components/ui/button-group'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '#/components/ui/card'
import { Item, ItemActions, ItemContent, ItemHeader, ItemTitle } from '#/components/ui/item'
import { api } from '#/lib/api'
import { calculateProduction, cn } from '#/lib/utils'

type ForgeCardProps = {
  product: Route.Response<'products.index'>[number]
  animationDelay: number
}

export function ForgeCard({ product, animationDelay }: ForgeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const production = calculateProduction(product)

  const { mutateAsync: forge } = useMutation({
    ...api.products.forge.mutationOptions(),
    onSettled: (_, __, ___, ____, { client }) => {
      client.invalidateQueries(api.products.index.queryOptions())
    },
    onSuccess: () => {
      toast.success('Item forged!')
    },
    onError: (err) => {
      toast.error(err.response.message)
    },
  })

  async function handleForge() {
    await forge({ body: { quantity }, params: { id: product.id } })
  }

  return (
    <Card className="bg-surface rise-in" style={{ animationDelay: `${animationDelay}ms` }}>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className="bg-kicker text-sand">
            $ {product.price}
          </Badge>
        </CardAction>
        <CardTitle className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{product.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <Link to="/products/$id" params={{ id: product.id }}>
            <h2 className="text-sea-ink text-lg font-bold hover:underline">{product.name}</h2>
          </Link>
        </CardTitle>
        <CardDescription>Stock: 2</CardDescription>
      </CardHeader>
      <CardContent className="flex h-full flex-col items-center space-y-6">
        <h3 className="text-sea-ink-soft text-center text-lg font-semibold">Raw Materials</h3>

        <ul className="w-full space-y-2">
          {product.rawMaterials.map((rm) => (
            <li key={rm.id} className="flex flex-col">
              <Item variant="outline">
                <ItemHeader>
                  <ItemTitle className="text-sea-ink-soft">{rm.name}</ItemTitle>
                </ItemHeader>
                <ItemContent>
                  <span className="text-sea-ink-soft">Needed: {rm.quantity_needed}</span>
                  <span className="text-sea-ink-soft">Available: {rm.quantity}</span>
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

        <Badge variant="secondary" className={cn('text-sand mt-auto', production > 0 ? 'bg-lagoon-deep' : 'bg-line')}>
          Max. Production: {production}
        </Badge>
      </CardContent>

      <CardFooter className="mt-auto">
        <ButtonGroup className="w-full flex-1">
          <Button
            variant="secondary"
            onClick={() => setQuantity((p) => (p <= 0 ? 0 : p - 1))}
            disabled={quantity == 0 || production < 1}
          >
            <Minus />
          </Button>
          <Button
            variant="secondary"
            className="flex-1"
            onClick={() => handleForge()}
            disabled={quantity == 0 || production < 1}
          >
            <Anvil />
            Forge {quantity}
          </Button>
          <Button
            variant="secondary"
            onClick={() => setQuantity((p) => (p >= 10 ? 10 : p + 1))}
            disabled={quantity == production || quantity >= 10 || production < 1}
          >
            <Plus />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
