import Router from "./Router"
import { ThemeProvider } from "styled-components"
import theme from "./theme/theme"
import GlobalStyle from "./theme/global"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
