import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new raw material.
 */
export const rawMaterialValidator = vine.create(
  vine.object({
    name: vine.string(),
    quantity: vine.string().regex(/^\d+(\.\d{1,3})?$/),
  })
)
