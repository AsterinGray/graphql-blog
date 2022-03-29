import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useMutation } from '@apollo/client'

import { SIGNIN } from '../api'

const SignIn = () => {
  const [signup, { data }] = useMutation(SIGNIN)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    signup({
      variables: {
        email,
        password
      }
    })
  }

  const [error, setError] = useState(null)

  useEffect(() => {
    if (data) {
      if (data.signin.userErrors.length) {
        setError(data.signin.userErrors[0].message)
      }
      if (data.signin.token) {
        localStorage.setItem('token', data.signin.token)
      }
    }
  }, [data])

  return (
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="text"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <p>{error}</p>}
          <Button onClick={handleClick}>Signin</Button>
        </Form>
      </div>
  )
}

export default SignIn
