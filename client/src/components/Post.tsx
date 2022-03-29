import React from 'react'
import { useMutation } from '@apollo/client'

import { PUBLISH_POST, UNPUBLISH_POST } from '../api'

const Post = ({
  title,
  content,
  date,
  user,
  published,
  id,
  isMyProfile
}: any) => {
  const [publishPost] = useMutation(PUBLISH_POST)
  const [unpublishPost] = useMutation(UNPUBLISH_POST)

  const formatedDate = new Date(Number(date))
  return (
        <div style={published === false ? { backgroundColor: 'hotpink' } : {}}>
            {isMyProfile && published === false && (
                <p
                    onClick={() => {
                      publishPost({
                        variables: {
                          postId: id
                        }
                      })
                    }}
                >
                    publish
                </p>
            )}
            {isMyProfile && published === true && (
                <p
                    onClick={() => {
                      unpublishPost({
                        variables: {
                          postId: id
                        }
                      })
                    }}
                >
                    unpublish
                </p>
            )}
            <div>
                <h2>{title}</h2>
                <h4>
                    Created At {`${formatedDate}`.split(' ').splice(0, 3).join(' ')} by{' '}
                    {user}
                </h4>
            </div>
            <p>{content}</p>
        </div>
  )
}

export default Post
