import theme from './theme'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, section{
    block-size: 100%;
  }
  html{
    scroll-snap-type: y mandatory;
  }
  body{
    background-color: ${theme.colors.black};
    *:focus{
      outline-color: ${theme.colors.primary};
    }
  }
  section{
    height: 100vh;
    scroll-behavior: smooth;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`

export default GlobalStyle