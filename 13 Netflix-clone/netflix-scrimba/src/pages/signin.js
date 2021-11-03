import React, { useContext, useState } from 'react'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from '../component'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router-dom'

export default function SignIn() {
  const [error, setError] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [seenPassword, setSeenPassword] = useState(false)

  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()
  const isInvalid = (emailAddress === '') | (password === '')

  const handleSubmit = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE)
      })
      .catch((error) => {
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.InputControl>
              <Form.Input
                type={seenPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.SeenText onClick={() => setSeenPassword(!seenPassword)}>
                {seenPassword ? 'HIDE' : 'SHOW'}
              </Form.SeenText>
            </Form.InputControl>
            <Form.Submit disabled={isInvalid}>Sign in</Form.Submit>
            <Form.Text>
              New to Netflix?{' '}
              <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
