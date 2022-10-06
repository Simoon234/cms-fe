import type { NextPage } from 'next'
import HomeLp from '../Components/HomeLp'
import Layout from '../layout/LayoutComponent'

const Home: NextPage = () => {
    return (
        <>
            <Layout title='Blog for you' keywords='sport, luxury, fashion' description='Super modern blog content'>
                <HomeLp />
            </Layout>
        </>

    )
}

export default Home
