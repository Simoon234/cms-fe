import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/global.theme'
import GlobalStyle from '../styles/global.styles.theme'
import { Header } from '../Components/Header'
import { LayoutApp } from '../layout/LayoutApp'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <LayoutApp>
                <Header/>
                <Component {...pageProps} />
            </LayoutApp>
        </ThemeProvider>
    )
}

export default MyApp
