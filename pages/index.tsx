import HomeLp from '../Components/HomeLp'
import Layout from '../layout/LayoutComponent'
import Articles from '../Components/Articles'
import { UseDispatchHook } from '../hooks/useDispatchHook'
import { useEffect, useState } from 'react'
import { getData, getLatestData } from '../redux/dataSlice'
import { UseAppSelectorHook } from '../hooks/useAppSelectorHook'
import { RootState } from '../redux/store/store'

const Home = () => {
    const [page, setPage] = useState<number>(1)
    const [itemsOnePage, setItemsOnePage] = useState<number>(3)
    const dispatch = UseDispatchHook()
    const { data, isLoading, latest, totalPages } = UseAppSelectorHook(
        (state: RootState) => state.data,
    )

    useEffect(() => {
        dispatch(getData({
            page,
            itemsOnePage,
        }))
        dispatch(getLatestData())
    }, [dispatch])

    console.log(data)
    console.log(latest)

    return (
        <>
            <Layout title='Blog for you' keywords='sport, luxury, fashion' description='Super modern blog content'>
                <HomeLp latest={latest.latest} />
                <Articles data={data} isLoading={isLoading} />
            </Layout>
        </>

    )
}

export default Home
