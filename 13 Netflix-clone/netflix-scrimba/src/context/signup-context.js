import { createContext, useState } from 'react'

const SignUpContext = createContext()

function SignUpContextProvider({ children }) {
  const [email, setEmail] = useState('')

  return (
    <SignUpContext.Provider value={{ email, setEmail }}>
      {children}
    </SignUpContext.Provider>
  )
}

export { SignUpContextProvider, SignUpContext }
