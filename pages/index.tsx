import type { NextPage } from 'next'
import styled from 'styled-components'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home App</title>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap'
                      rel='stylesheet' />
            </Head>
            <div>
                <Text>siema</Text>
            </div>
        </>

    )
}

export const Text = styled.p`
  color: ${props => props.theme.color}
`


export default Home
