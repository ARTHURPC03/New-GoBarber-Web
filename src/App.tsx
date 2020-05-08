import React from 'react'

import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
import GlobalStyle from './styles/global'

import { AuthProvider } from './hooks/AuthContext'

import ToastContainer from './components/ToastContainer'

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
)
export default App
