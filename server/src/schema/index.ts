import { gql } from 'apollo-server'

const typeDefs = gql`
    type Query {
        user: User
        posts: [Post!]!
        profile(userId: ID!): Profile
    }

    type Mutation {
        postCreate(post: PostInput!): PostPayload!
        postUpdate(postId: ID!, post: PostInput!): PostPayload!
        postDelete(postId: ID!): PostPayload!
        postPublish(postId: ID!): PostPayload!
        postUnpublish(postId: ID!): PostPayload!
        signup(
            credentials: CredentialsInput!
            name: String!
            bio: String!
        ): AuthPayload!
        signin(credentials: CredentialsInput!): AuthPayload!
    }

    type Post {
        id: ID!
        title: String!
        content: String!
        createdAt: String!
        published: Boolean!
        user: User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        posts: [Post!]!
    }

    type Profile {
        id: ID!
        bio: String!
        isMyProfile: Boolean!
        user: User!
    }

    type PostPayload {
        error: String
        post: Post
    }

    type AuthPayload {
        error: String
        token: String
    }

    input PostInput {
        title: String
        content: String
    }

    input CredentialsInput {
        email: String!
        password: String!
    }
`

export default typeDefs
