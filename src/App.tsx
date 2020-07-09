import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import usePersistedState from './utils/usePersistedState'

import ThemeSwitcher from './components/ThemeSwitcher'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'

import AppProvider from './hooks'

import Routes from './routes'

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppProvider>
          <ThemeSwitcher toggleTheme={toggleTheme} />
          <Routes />
        </AppProvider>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  )
}
export default App
