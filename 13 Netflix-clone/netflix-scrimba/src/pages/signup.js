import React, { useContext, useState } from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../component'
import { SignUpContext } from '../context/signup-context'
import * as ROUTES from '../constants/routes'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'

export default function SignUp() {
  const { email } = useContext(SignUpContext)
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()
  const [error, setError] = useState('')
  const [emailAddress, setEmailAddress] = useState(email || '')
  const [seenPassword, setSeenPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')

  const isInvalid = (emailAddress === '') | (password === '')

  const handleSignup = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE)
          })
      )
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
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup}>
            <Form.Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

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

            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
            <Form.Text>
              Already a user?{' '}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in here.</Form.Link>
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
