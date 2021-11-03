import React from 'react'
import { Header } from '../component'
import * as ROUTES from '../constants/routes'

export function HeaderContainer({ displaybutton, children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="%PUBLIC_URL%/images/misc/logo.svg"
          alt="Netflix"
        />
        <Header.ButtonLink displaybutton={displaybutton} to={ROUTES.SIGN_IN}>
          Sign In
        </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}
