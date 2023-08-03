import Router from "./Router"
import { ThemeProvider } from "styled-components"
import theme from "./theme/theme"
import GlobalStyle from "./theme/global"
import Header from "./components/Header"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>
      <Router />
    </ThemeProvider>
  )
}

export default App
