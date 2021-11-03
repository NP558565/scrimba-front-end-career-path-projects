import React from 'react'
import { Accordion, OptForm } from '../component'
import * as ROUTE from '../constants/routes'
import faqsData from '../fixtures/faqs.json'
import { useHistory } from 'react-router-dom'

export function FaqsContainer({ email, setEmail }) {
  const history = useHistory()
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input
          placeholder="Email address"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <OptForm.Button
          onClick={() => email !== '' && history.push(ROUTE.SIGN_UP)}
        >
          Get Started
        </OptForm.Button>
      </OptForm>
    </Accordion>
  )
}
