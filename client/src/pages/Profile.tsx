import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'

import { GET_PROFILE } from '../api'
import Post from '../components/Post'
import AddPostModal from '../components/AddPostModal'

const Profile = () => {
  const { id } = useParams()

  const { data, error, loading } = useQuery(GET_PROFILE, {
    variables: {
      userId: id
    }
  })

  if (error) return <div>error page</div>

  if (loading) return <div>Spinner...</div>

  const { profile } = data

  return (
      <div>
        <div
            style={{
              marginBottom: '2rem',
              display: 'flex ',
              justifyContent: 'space-between'
            }}
        >
          <div>
            <h1>{profile.user.name}</h1>
            <p>{profile.bio}</p>
          </div>
          <div>{profile.isMyProfile ? <AddPostModal /> : null}</div>
        </div>
        <div>
          {profile.user.posts.map((post: any) => {
            return (
                <Post
                    title={post.title}
                    content={post.content}
                    date={post.createdAt}
                    user={profile.user.name}
                    published={post.published}
                    isMyProfile={profile.isMyProfile}
                    id={post.id}
                />
            )
          })}
        </div>
      </div>
  )
}

export default Profile
