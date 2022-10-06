import { createGlobalStyle } from 'styled-components'
import { TypeTheme } from './global.theme'

const GlobalStyle = createGlobalStyle<{ theme: TypeTheme }>`
  html,
  body {
    font-family: ${(props) => props.theme.font.fontFamily};
    background-color: ${props => props.theme.colors.backgroundColor};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle