'use strict'

const Model = use('Model')

class Post extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Post
