import Router from "./Router"
import { ThemeProvider } from "styled-components"
import theme from "./theme/theme"
import GlobalStyle from "./theme/global"
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>
      <Router />
      <Footer/>
    </ThemeProvider>
  )
}

export default App
