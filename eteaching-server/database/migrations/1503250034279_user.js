'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nomecompleto', 80).notNullable()
      table.string('rg', 80).notNullable().unique()
      table.string('cpf', 80).notNullable().unique()
      table.string('orgaoemissor', 80).notNullable()
      table.integer('cep', 8)
      table.string('logradouro', 80)
      table.string('bairro', 80)
      table.string('cidade', 80)
      table.string('uf', 2)
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
