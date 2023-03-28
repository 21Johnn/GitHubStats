import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar/Sidebar'
import EstiloGlobal, { Container } from './styles'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [usingDarkTheme, setusingDarkTheme] = useState(false)

  function changeTheme() {
    setusingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About></About>
          <Projects></Projects>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
