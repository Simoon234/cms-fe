import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global.styles.theme'
import Header from '../Components/Header'
import LayoutApp from '../layout/LayoutApp'
import theme from '../styles/global.theme'
import Footer from '../Components/common/Footer'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <LayoutApp>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </LayoutApp>
        </ThemeProvider>
    )
}

export default MyApp
