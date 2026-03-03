import z from 'zod'

export const productSchema = z.object({
  name: z.string('the product must have a name').min(2, 'minimum 2 characters'),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, 'price pattern wrong. e.g 563.12'),
  rawMaterials: z
    .array(
      z.object({
        id: z.uuid('select a valid raw material'),
        quantity_needed: z.string().regex(/^\d+(\.\d{1,3})?$/, 'invalid quantity format. e.g 785.123'),
      }),
    )
    .min(1, 'At least one raw material is required'),
})

export type ProductSchema = z.infer<typeof productSchema>
