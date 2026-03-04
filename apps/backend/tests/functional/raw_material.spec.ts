import { RawMaterialFactory } from '#database/factories/raw_material_factory'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

test.group('Raw material', (group) => {
  group.each.setup(() => testUtils.db().wrapInGlobalTransaction())

  async function persistRawMaterial() {
    return await RawMaterialFactory.create()
  }

  test('index raw material list', async ({ client }) => {
    const rawMaterial = await persistRawMaterial()
    const response = await client.visit('raw_materials.index')

    response.assertBodyContains([{ id: rawMaterial.id }])
    response.assertOk()
  })

  test('create raw material', async ({ client }) => {
    const rawMaterial = await RawMaterialFactory.makeStubbed()

    const response = await client.visit('raw_materials.store').json(rawMaterial)

    response.assertCreated()
  })

  test('show raw material', async ({ client }) => {
    const rawMaterial = await persistRawMaterial()
    const response = await client.visit('raw_materials.show', { id: rawMaterial.id })

    response.assertBodyContains({ id: rawMaterial.id })
    response.assertOk()
  })

  test('update raw material', async ({ client }) => {
    const rawMaterial = await persistRawMaterial()

    const response = await client
      .visit('raw_materials.update', { id: rawMaterial.id })
      .json(rawMaterial)

    response.assertOk()
  })

  test('delete raw material', async ({ client }) => {
    const rawMaterial = await persistRawMaterial()

    const response = await client.visit('raw_materials.destroy', { id: rawMaterial.id })

    response.assertNoContent()
  })

  test('seed raw material', async ({ client }) => {
    const response = await client.visit('raw_materials.seed')

    response.assertNoContent()
  })
})
