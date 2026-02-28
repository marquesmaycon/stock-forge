import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'product_raw_materials'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table
        .uuid('product_id')
        .notNullable()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')

      table
        .uuid('raw_material_id')
        .notNullable()
        .references('id')
        .inTable('raw_materials')
        .onDelete('CASCADE')

      table.decimal('quantity_needed', 12, 3).notNullable()

      table.unique(['product_id', 'raw_material_id'])

      table.timestamp('created_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
