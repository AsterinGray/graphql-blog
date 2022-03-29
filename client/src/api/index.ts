import { gql } from '@apollo/client'

export const GET_POSTS = gql`
    query{
        posts {
            id
            title
            content
            createdAt
            user {
                name
            }
        }
    }
`

export const PUBLISH_POST = gql`
    mutation PublishPost($postId: ID!) {
        postPublish(postId: $postId) {
            post {
                title
            }
        }
    }
`

export const UNPUBLISH_POST = gql`
    mutation unpublishPost($postId: ID!) {
        postUnpublish(postId: $postId) {
            post {
                title
            }
        }
    }
`

export const CREATE_POST = gql`
    mutation CreatePost($title: String!, $content: String!) {
        postCreate(post: { title: $title, content: $content }) {
            error 
            post {
                title
                createdAt
                content
                user {
                    name
                }
            }
        }
    }
`

export const GET_PROFILE = gql`
    query GetProfile($userId: ID!) {
        profile(userId: $userId) {
            bio
            isMyProfile
            user {
                name
                posts {
                    id
                    title
                    content
                    createdAt
                    published
                }
            }
        }
    }
`

export const SIGNUP = gql`
    mutation Signup(
        $email: String!
        $password: String!
        $name: String!
        $bio: String!
    ) {
        signup(
            credentials: { email: $email, password: $password }
            name: $name
            bio: $bio
        ) {
            error
            token
        }
    }
`

export const SIGNIN = gql`
    mutation Signin($email: String!, $password: String!) {
        signin(credentials: { email: $email, password: $password }) {
            userErrors {
                message
            }
            token
        }
    }
`
