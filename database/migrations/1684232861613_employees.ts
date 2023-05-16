import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employees'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.string('empNo').notNullable().unique()
      table.string('jobTitle').notNullable()
      table.integer('department_id').unsigned().references('id').inTable('departments').onDelete('CASCADE')
      table.string('telephone').notNullable()
      table.string('email').notNullable().unique()
      table.string('profile_picture').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
