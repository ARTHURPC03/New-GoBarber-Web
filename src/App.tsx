import React from 'react'

import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
import GlobalStyle from './styles/global'

import AppProvider from './hooks'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
)
export default App
