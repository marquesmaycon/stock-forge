import { useMutation } from '@tanstack/react-query'
import type { Route } from '@tuyau/core/types'

import { FieldGroup } from '#/components/ui/field'
import { useAppForm } from '#/hooks/form'
import { api } from '#/lib/api'

import { rawMaterialFormOption } from './schema'

type RawMaterialFormProps = {
  rawMaterial?: Route.Response<'raw_materials.show'>
}

export function RawMaterialForm({ rawMaterial }: RawMaterialFormProps) {
  const { mutateAsync: updateRawMaterial } = useMutation(api.rawMaterials.update.mutationOptions())
  const { mutateAsync: createRawMaterial } = useMutation(api.rawMaterials.store.mutationOptions())

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
      className="bg-background space-y-4 rounded-lg border px-4 py-6"
    >
      <FieldGroup>
        <form.AppField name="name">
          {({ InputField }) => <InputField label="Name" placeholder="type the raw material name" />}
        </form.AppField>
        <form.AppField name="quantity">
          {({ InputField }) => <InputField label="Quantity" placeholder="type the raw material quantity" />}
        </form.AppField>

        <form.AppForm>
          <form.SubmitButton label={rawMaterial ? 'Atualizar' : 'Criar'} className="ml-auto" />
        </form.AppForm>
      </FieldGroup>
    </form>
  )
}
