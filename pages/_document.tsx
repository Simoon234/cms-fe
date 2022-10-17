import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en-EN'>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Roboto+Condensed:wght@400;700&display=swap'
                        rel='stylesheet'/>
                    <link rel='preconnect' href='https://fonts.googleapis.com'/>
                    <link rel="icon" href='/logo.png'/>
                    <link rel='preconnect' href='https://fonts.gstatic.com'/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;