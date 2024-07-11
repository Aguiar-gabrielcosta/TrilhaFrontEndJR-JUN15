import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'
import * as S from './styles'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <S.GlobalLayout>
        <header>Header</header>
        <main>Main</main>
        <footer>Footer</footer>
      </S.GlobalLayout>
    </ThemeProvider>
  )
}

export default App
