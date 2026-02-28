import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new product.
 */
export const productValidator = vine.create(
  vine.object({
    name: vine.string(),
    price: vine.string().regex(/^\d+(\.\d{1,2})?$/),
  })
)
