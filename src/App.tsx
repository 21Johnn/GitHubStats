import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar/Sidebar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <Sidebar />
        <main>
          <About></About>
          <Projects></Projects>
        </main>
      </Container>
    </>
  )
}

export default App
