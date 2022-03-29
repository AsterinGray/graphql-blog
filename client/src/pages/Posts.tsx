import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  return (
      <>
        <Link to={'/profile'} >Profile</Link>
        <h1>Post Page</h1>
      </>
  )
}

export default Posts
