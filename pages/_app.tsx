import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global.styles.theme'
import Header from '../Components/Header'
import LayoutApp from '../layout/LayoutApp'
import theme from '../styles/global.theme'
import Footer from '../Components/common/Footer'
import { Provider } from 'react-redux'
import { store } from '../redux/store/store'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <LayoutApp>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </LayoutApp>
            </ThemeProvider>
        </Provider>

    )
}

export default MyApp
