import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_POSTS } from '../api'

import Post from '../components/Post'

const Posts = () => {
  const { data, error } = useQuery(GET_POSTS)
  console.log(error)

  const { posts } = data

  return (
      <><div>
          {posts.map((post: any) => {
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
