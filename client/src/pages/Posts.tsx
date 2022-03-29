import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_POSTS } from '../api'

import Post from '../components/Post'

const Posts = () => {
  const { data, error, loading } = useQuery(GET_POSTS)
  if (loading) return <h1>Loading...</h1>

  if (error) {
    console.log(error)
    return <h1>error</h1>
  }

  return (
      <><div>
          {data && data.posts.map((post: any) => {
            return (
                  <Post
                      key={post.id}
                      title={post.title}
                      content={post.content}
                      date={post.createdAt}
                      id={post.id}
                      user={post.user.name}
                  />
            )
          })}
      </div>
      </>
  )
}

export default Posts
