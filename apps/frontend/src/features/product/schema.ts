import z from 'zod'

export const productSchema = z.object({
  name: z.string(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/),
  rawMaterials: z
    .array(
      z.object({
        id: z.uuid('select a valid raw material'),
        quantity_needed: z
          .string()
          .regex(/^\d+(\.\d{1,3})?$/, 'invalid quantity format'),
      }),
    )
    .min(1, 'At least one raw material is required'),
})

export type ProductSchema = z.infer<typeof productSchema>
