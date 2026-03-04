import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import type { Route } from '@tuyau/core/types'
import { toast } from 'sonner'

import { FieldGroup } from '#/components/ui/field'
import { useAppForm } from '#/hooks/form'
import { api } from '#/lib/api'

import { rawMaterialFormOption } from './schema'

type RawMaterialFormProps = {
  rawMaterial?: Route.Response<'raw_materials.show'>
}

export function RawMaterialForm({ rawMaterial }: RawMaterialFormProps) {
  const navigate = useNavigate()

  const { mutateAsync: createRawMaterial } = useMutation({
    ...api.rawMaterials.store.mutationOptions(),
    onSuccess: ({ id }) => {
      toast.success('Raw material created')
      navigate({ to: '/products/$id', params: { id } })
    },
    onError: (err) => {
      toast.error('Error creating raw material', { description: err.response.message })
    },
    onSettled: (_, __, ___, ____, { client }) => {
      client.invalidateQueries(api.rawMaterials.index.queryOptions())
    },
  })
  const { mutateAsync: updateRawMaterial } = useMutation({
    ...api.rawMaterials.update.mutationOptions(),
    onSuccess: () => {
      toast.success('Raw material updated')
    },
    onError: (err) => {
      toast.error('Error updating raw material', { description: err.response.message })
    },
    onSettled: (_, __, { params: { id } }, ____, { client }) => {
      client.invalidateQueries(api.rawMaterials.index.queryOptions())
      client.invalidateQueries(api.rawMaterials.show.queryOptions({ params: { id } }))
    },
  })
  const { mutateAsync: destroy } = useMutation({
    ...api.rawMaterials.destroy.mutationOptions(),
    onSuccess: () => {
      toast.success('Raw material deleted')
      navigate({ to: '/raw-materials' })
    },
    onError: (err) => {
      toast.error('Error deleting raw material', { description: err.response.message })
    },
    onSettled: (_, __, { params: { id } }, ____, { client }) => {
      client.invalidateQueries(api.rawMaterials.index.queryOptions())
      client.removeQueries(api.rawMaterials.show.queryOptions({ params: { id } }))
    },
  })

  const form = useAppForm({
    ...rawMaterialFormOption,
    defaultValues: rawMaterial ?? rawMaterialFormOption.defaultValues,
    onSubmit: async ({ value }) => {
      if (rawMaterial) {
        await updateRawMaterial({ body: value, params: { id: rawMaterial.id } })
      } else {
        await createRawMaterial({ body: value })
      }
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="bg-surface rise-in space-y-4 rounded-lg border px-4 py-6"
    >
      <FieldGroup>
        <form.AppField name="name">
          {({ InputField }) => <InputField label="Name" placeholder="type the raw material name" />}
        </form.AppField>
        <form.AppField name="quantity">
          {({ InputField }) => (
            <InputField label="Quantity" placeholder="type the raw material quantity" type="number" />
          )}
        </form.AppField>

        <div className="flex justify-end gap-8">
          <form.AppForm>
            {rawMaterial && <form.DestroyButton destroy={() => destroy({ params: { id: rawMaterial.id } })} />}
            <form.SubmitButton label={rawMaterial ? 'Update' : 'Create'} />
          </form.AppForm>
        </div>
      </FieldGroup>
    </form>
  )
}
