'use strict'

const { GraphError } = require('adonis-graphql')

const resolvers = {

  Query: {
    async user (_) {
      console.log(GraphError)
      console.log(require('adonis-graphql'))
    }
  }

}

module.exports = resolvers
