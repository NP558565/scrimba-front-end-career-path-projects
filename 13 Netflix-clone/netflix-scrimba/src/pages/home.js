import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs'
import { HeaderContainer } from '../containers/header'
import { OptForm, Feature } from '../component'
import { SignUpContext } from '../context/signup-context'
import * as ROUTE from '../constants/routes'
export default function Home() {
  const { email, setEmail } = useContext(SignUpContext)
  const history = useHistory()
  return (
    <>
      <HeaderContainer displaybutton="block">
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input
              placeholder="Email Address"
              type="email"
              required={true}
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <OptForm.Button
              onClick={() => email !== '' && history.push(ROUTE.SIGN_UP)}
            >
              Get Started
            </OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer email={email} setEmail={setEmail} />
      <FooterContainer />
    </>
  )
}
