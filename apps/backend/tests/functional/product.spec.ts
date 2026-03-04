import { ProductFactory } from '#database/factories/product_factory'
import { RawMaterialFactory } from '#database/factories/raw_material_factory'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

test.group('Product', (group) => {
  group.each.setup(() => testUtils.db().wrapInGlobalTransaction())

  async function persistProduct() {
    return await ProductFactory.with('rawMaterials', 1, (rm) => {
      rm.tap((_, { faker }) => {
        rm.pivotAttributes({
          quantity_needed: faker.number.float({ fractionDigits: 3, min: 5, max: 75 }),
        })
      })
    }).create()
  }

  test('index product list', async ({ client }) => {
    const product = await persistProduct()
    const response = await client.visit('products.index')

    response.assertBodyContains([{ id: product.id }])
    response.assertOk()
  })

  test('create product', async ({ client }) => {
    const rawMaterials = await RawMaterialFactory.createMany(2)
    const product = await ProductFactory.makeStubbed()

    const response = await client.visit('products.store').json({
      ...product,
      rawMaterials: rawMaterials.map((rm) => ({
        id: rm.id,
        quantity_needed: '662',
      })),
    })

    response.assertCreated()
  })

  test('show product', async ({ client }) => {
    const product = await persistProduct()
    const response = await client.visit('products.show', { id: product.id })

    response.assertBodyContains({ id: product.id })
    response.assertOk()
  })

  test('update product', async ({ client }) => {
    const product = await persistProduct()

    await product.load('rawMaterials')

    const response = await client.visit('products.update', { id: product.id }).json({
      ...product,
      rawMaterials: product.rawMaterials.map((rm) => ({
        id: rm.id,
        quantity_needed: rm.$extras.pivot_quantity_needed,
      })),
    })

    response.assertOk()
  })

  test('delete product', async ({ client }) => {
    const product = await persistProduct()

    const response = await client.visit('products.destroy', { id: product.id })

    response.assertNoContent()
  })

  test('forge product', async ({ client }) => {
    const product = await persistProduct()

    const response = await client.visit('products.forge', { id: product.id }).json({
      quantity: 1,
    })

    response.assertCreated()
  })
})
