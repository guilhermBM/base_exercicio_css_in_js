import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Global, { Container } from './styles'
import themeDefault from './containers/theme/default'

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <Global />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
