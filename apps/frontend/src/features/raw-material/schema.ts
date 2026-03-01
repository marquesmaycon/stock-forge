import { formOptions } from '@tanstack/react-form'
import z from 'zod'

export const rawMaterialSchema = z.object({
  name: z.string(),
  quantity: z.string().regex(/^\d+(\.\d{1,2})?$/),
})

export type RawMaterialSchema = z.infer<typeof rawMaterialSchema>

export const productDefaultValues: RawMaterialSchema = {
  name: '',
  quantity: '',
}

export const rawMaterialFormOption = formOptions({
  defaultValues: productDefaultValues,
  validators: {
    onSubmit: rawMaterialSchema,
  },
})
