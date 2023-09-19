import theme from './theme'
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    svg{
      display: block;
    }
  }
  html, body, section, footer{
    block-size: 100%;
  }
  html{
    scroll-snap-type: y mandatory;
  }
  body{
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    &.no-scroll {
    overflow: hidden !important;
  }
    *:focus{
      outline-color: ${theme.colors.primary};
    }
  }
  ${() => window.location.pathname === "/" && css` 
    section, footer{
      height: 100vh;
      scroll-behavior: smooth;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }`
  }
`

export default GlobalStyle