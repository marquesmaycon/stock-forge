import vine from '@vinejs/vine'

export const forgeValidator = vine.create({
  quantity: vine.number().nonNegative().withoutDecimals(),
  params: vine.object({
    id: vine.string().uuid(),
  }),
})
