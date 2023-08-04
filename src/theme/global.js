import theme from './theme'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${theme.colors.black};
  }
  main{
    margin-top: 20px;
    height: 3000px
  }
`

export default GlobalStyle