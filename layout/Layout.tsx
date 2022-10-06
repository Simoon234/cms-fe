import { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

interface Layout {
    children: ReactNode,
    title: string;
    description: string;
    keywords: string;
}

export const Layout = ({ children, keywords, title, description }: Layout) => {
    return (
        <LayoutWrapper>
            <Head>
                <title>{title}</title>
                <meta name='descriptions' content={description} />
                <meta name='keywords' content={keywords} />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Roboto+Condensed:wght@400;700&display=swap'
                    rel='stylesheet' />
            </Head>
            {children}
        </LayoutWrapper>
    )
}

export const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`