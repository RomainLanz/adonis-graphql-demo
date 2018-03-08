'use strict'

const User = use('App/Models/User')
const Post = use('App/Models/Post')
const { validateAll } = use('Validator')
const GraphQLError = use('Adonis/Addons/GraphQLError')

const resolvers = {

  Query: {
    async users () {
      const users = await User.all()
      return users.toJSON()
    },

    async user (_, { id }) {
      const user = await User.first(id)
      return user.toJSON()
    }
  },

  Mutation: {
    async createUser (_, data) {
      const rules = {
        username: 'required|unique:users,username',
        email: 'required|email|unique:users,email',
        password: 'required',
        password_confirmation: 'required_if:password|same:password',
      }

      const validation = await validateAll(data, rules)

      if (validation.fails()) {
        throw new GraphQLError('Validation Failed', validation.messages())
      }

      delete data.password_confirmation

      return await User.create(data)
    },
  },

  User: {
    async posts ({ id }) {
      const posts = await Post
        .query()
        .where('user_id', id)
        .fetch()

      return posts.toJSON()
    }
  }

}

module.exports = resolvers
