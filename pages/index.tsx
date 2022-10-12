import HomeLp from '../Components/HomeLp'
import Layout from '../layout/LayoutComponent'
import Articles from '../Components/Articles'
import {UseDispatchHook} from '../hooks/useDispatchHook'
import {ChangeEvent, useCallback, useEffect, useState} from 'react'
import {getData, getLatestData} from '../redux/dataSlice'
import {UseAppSelectorHook} from '../hooks/useAppSelectorHook'
import {RootState} from '../redux/store/store'
import {ITEM_ON_PAGE} from '../api.config'

const Home = () => {
    const [page, setPage] = useState<number>(1)
    const [itemsOnePage,] = useState<number>(ITEM_ON_PAGE)
    const dispatch = UseDispatchHook()
    const {searchText} = UseAppSelectorHook((state) => state.searchText);
    const {data, isLoading, latest} = UseAppSelectorHook(
        (state: RootState) => state.data,
    )

    const handlePage = useCallback((e: ChangeEvent<unknown>, value: number) => {
        e.preventDefault();
        setPage(value);
    }, []);


    useEffect(() => {
        dispatch(getData({
            page,
            itemsOnePage,
            searchText
        }))
        dispatch(getLatestData())
    }, [searchText, dispatch, itemsOnePage, page])


    return (
        <>
            <Layout title='Blog for you' keywords='sport, luxury, fashion' description='Super modern blog content'>
                <HomeLp latest={latest.latest}/>
                <Articles handlePage={handlePage} data={data} page={page} isLoading={isLoading}
                          totalPages={data?.totalPages}/>
            </Layout>
        </>

    )
}

export default Home
