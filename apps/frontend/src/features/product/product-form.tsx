import { formOptions } from '@tanstack/react-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import type { Route } from '@tuyau/core/types'
import { Plus, Trash, Trash2Icon } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '#/components/ui/alert-dialog'
import { Button } from '#/components/ui/button'
import { FieldGroup } from '#/components/ui/field'
import { Separator } from '#/components/ui/separator'
import { useAppForm } from '#/hooks/form'
import { api } from '#/lib/api'
import { cn } from '#/lib/utils'

import type { ProductSchema } from './schema'
import { productSchema } from './schema'

type ProductFormProps = {
  product?: Route.Response<'products.show'>
}

const productDefaultValues: ProductSchema = {
  name: '',
  price: '',
  rawMaterials: [{ id: '', quantity_needed: '' }],
}

const productFormOptions = formOptions({
  defaultValues: productDefaultValues,
  validators: {
    onSubmit: productSchema,
  },
})

export function ProductForm({ product }: ProductFormProps) {
  const { data: rawMaterials } = useQuery(api.rawMaterials.index.queryOptions())

  const { mutateAsync: create } = useMutation(api.products.store.mutationOptions())
  const { mutateAsync: update } = useMutation(api.products.update.mutationOptions())
  const { mutateAsync: destroy } = useMutation(api.products.destroy.mutationOptions())

  const form = useAppForm({
    ...productFormOptions,
    defaultValues: product ?? productFormOptions.defaultValues,
    onSubmit: async ({ value }) => {
      if (product) {
        await update({ body: value, params: { id: product.id } })
      } else {
        await create({ body: value })
      }
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="bg-background rise-in space-y-4 rounded-lg border px-4 py-6 delay-500"
    >
      <FieldGroup>
        <form.AppField name="name">
          {({ InputField }) => <InputField label="Name" placeholder="type the product name" />}
        </form.AppField>
        <form.AppField name="price">
          {({ InputField }) => <InputField label="Price" placeholder="type the product price" />}
        </form.AppField>

        <Separator />

        <form.AppField name="rawMaterials" mode="array">
          {(field) => (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-sea-ink-soft max-w-2xl text-base sm:text-lg">Raw Materials</h2>
                <Button variant="secondary" size="sm" onClick={() => field.pushValue({ id: '', quantity_needed: '' })}>
                  Add <Plus />
                </Button>
              </div>

              {field.state.value.map((_, index) => (
                <div key={index} className="mb-4 flex flex-col gap-4 rounded-lg border p-4 lg:flex-row lg:items-end">
                  <form.AppField name={`rawMaterials[${index}].id`}>
                    {({ SelectField }) => (
                      <SelectField
                        label="Name"
                        placeholder="type the raw material ID"
                        options={rawMaterials?.map((rm) => ({
                          label: rm.name,
                          value: rm.id,
                        }))}
                      />
                    )}
                  </form.AppField>
                  <form.AppField key={index} name={`rawMaterials[${index}].quantity_needed`}>
                    {({ InputField }) => <InputField label="Quantity Needed" placeholder="type the quantity needed" />}
                  </form.AppField>

                  <Button variant="destructive" size="icon" onClick={() => field.removeValue(index)}>
                    <Trash />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </form.AppField>
        <div className="flex justify-end gap-8">
          <form.AppForm>
            {product && <form.DestroyButton destroy={() => destroy({ params: { id: product.id } })} />}
            <form.SubmitButton label={product ? 'Update' : 'Create'} />
          </form.AppForm>
        </div>
      </FieldGroup>
    </form>
  )
}
