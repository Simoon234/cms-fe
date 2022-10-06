import { ReactNode } from 'react'
import Head from 'next/head'

interface LayoutComponent {
    children: ReactNode,
    title: string;
    description: string;
    keywords: string;
}
const Layout = ({ children, keywords, title, description }: LayoutComponent) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='descriptions' content={description} />
                <meta name='keywords' content={keywords} />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Roboto+Condensed:wght@400;700&display=swap'
                    rel='stylesheet' />
            </Head>
            {children}
        </>
    )
}

export default Layout