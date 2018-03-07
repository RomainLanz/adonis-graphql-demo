'use strict'

const GraphQLError = use('Adonis/Addons/GraphQLError')

const resolvers = {

  Query: {
    async user () {
      return new GraphQLError('Fail!', [{ message: 'Validation failed' }])
    }
  }

}

module.exports = resolvers
