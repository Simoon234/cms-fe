import {createGlobalStyle} from 'styled-components'
import {TypeTheme} from './global.theme'

const GlobalStyle = createGlobalStyle<{ theme: TypeTheme }>`
  html,
  body {
    font-family: ${(props) => props.theme.font.fontFamily};
    background-color: ${props => props.theme.colors.backgroundColor};
    cursor: default;
  }

  li {
    list-style: none;
  }

  p {
    line-height: 32px;
    font-size: 18px;
    color: ${props => props.theme.font.pFontColor};
    word-break: break-word;
  }

  h3 {
    width: 339px;
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 10px;
    color: ${props => props.theme.font.h3FontColor};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
`

export default GlobalStyle