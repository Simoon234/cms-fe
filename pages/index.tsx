import type { NextPage } from 'next'
import styled from 'styled-components'
import { Layout } from '../layout/Layout'

const Home: NextPage = () => {
    return (
        <>
            <Layout title='Blog for you' keywords='sport, luxury, fashion' description='Super modern blog content'>
                <div>
                    <h1>Test</h1>
                </div>
            </Layout>
        </>

    )
}

export const Text = styled.p`
  color: ${(props) => props.theme.colors.mainFontColor}
`


export default Home
