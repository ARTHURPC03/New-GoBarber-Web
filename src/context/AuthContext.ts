import { createContext } from 'react'

interface AuthContextData {
  name: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContext)

export default AuthContext
