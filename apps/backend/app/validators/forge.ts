import vine from '@vinejs/vine'

export const forgeValidator = vine.create({
  quantity: vine.number().nonNegative().withoutDecimals(),
  productId: vine.string().uuid(),
})
