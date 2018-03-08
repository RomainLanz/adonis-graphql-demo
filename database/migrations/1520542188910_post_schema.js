'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.integer('user_id')
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
