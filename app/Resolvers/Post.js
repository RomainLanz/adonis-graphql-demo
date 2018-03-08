'use strict'

const Post = use('App/Models/Post')
const GraphQLError = use('Adonis/Addons/GraphQLError')

const resolvers = {

  Query: {
    async posts () {
      const posts = await Post.all()
      return posts.toJSON()
    },

    async post (_, { id }) {
      const post = await Post.first(id)
      return post.toJSON()
    }
  },

}

module.exports = resolvers
