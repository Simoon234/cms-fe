import {ReactNode} from 'react'
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
            </Head>
            {children}
        </>
    )
}

export default Layout