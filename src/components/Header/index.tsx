import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title, logo } = useContext(ThemeContext)

  return (
    <Container>
      <img src={logo} alt="GoBarber" width={125} />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={colors.text}
        offHandleColor={colors.secundary}
        onHandleColor={colors.text}
      />
    </Container>
  )
}

export default Header
