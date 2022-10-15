import type {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/global.styles.theme'
import Header from '../Components/Header'
import LayoutApp from '../layout/LayoutApp'
import theme from '../styles/global.theme'
import Footer from '../Components/common/Footer'
import {Provider} from 'react-redux'
import {store} from '../redux/store/store'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {User} from "../Components/User";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <LayoutApp>
                    <ToastContainer
                        position='top-right'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        draggable
                        pauseOnFocusLoss={false}
                        pauseOnHover={false}
                    />
                    <Header/>
                    <Component {...pageProps}  />
                    <User/>
                    <Footer />
                </LayoutApp>
            </ThemeProvider>
        </Provider>

    )
}

export default MyApp
