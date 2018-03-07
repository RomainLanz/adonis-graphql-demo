'use strict'

const Hash = use('Hash')
const Model = use('Model')

class User extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeCreate', async (userInstance) => {
      if (userInstance.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }
}

module.exports = User
