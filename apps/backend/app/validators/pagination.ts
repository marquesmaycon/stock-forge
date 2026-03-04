import vine from '@vinejs/vine'

export const paginationValidator = vine.create({
  page: vine.number().optional(),
  limit: vine.number().optional(),
})
