import { ApolloServer } from 'apollo-server'
import { connect } from 'mongoose'

import { MONGODB_URL } from './config'
import typeDefs from './schema'

import { Mutation, Post, Profile, Query, User } from './resolvers'
import { getUserId } from './utils'

import PostModel from './models/Post'
import ProfileModel from './models/Profile'
import UserModel from './models/User'

const server = new ApolloServer({
	typeDefs,
	resolvers: { Query, Mutation, Profile, Post, User },
	context: async ({ req }) => {
		const userId = await getUserId(req.headers.authorization)
		return { userId, PostModel, ProfileModel, UserModel }
	}
})

server.listen().then(({ url }) => {
	connect(MONGODB_URL).then(() => {
		console.log('Database Connected')
	})
	console.log(`Server ready on ${url}`)
})
