import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { GlobalStyles } from './globalstyles'
import { SignUpContextProvider } from './context/signup-context'
import App from './App'
import { FirebaseContext } from './context/firebase'
import ScrollToTop from './utils/ScrollToTop'

const config = {
  apiKey: 'AIzaSyDNbLr3Qku5OtA6qEgcbIXpjeFvdlH0i1s',
  authDomain: 'netflix-35a46.firebaseapp.com',
  databaseURL:
    'https://netflix-35a46-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'netflix-35a46',
  storageBucket: 'netflix-35a46.appspot.com',
  messagingSenderId: '120632586146',
  appId: '1:120632586146:web:6e2a709d535ede5e040cfb',
  measurementId: 'G-FWXDS3JM81',
}

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/lersu-netflix">
      <ScrollToTop />
      <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <SignUpContextProvider>
          <GlobalStyles />
          <App />
        </SignUpContextProvider>
      </FirebaseContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
