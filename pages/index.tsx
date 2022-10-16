import HomeLp from '../Components/HomeLp'
import Layout from '../layout/LayoutComponent'
import Articles from '../Components/Articles'
import {UseDispatchHook} from '../hooks/useDispatchHook'
import {useEffect} from 'react'
import {getData, getLatestData} from '../redux/dataSlice'
import {UseAppSelectorHook} from '../hooks/useAppSelectorHook'
import {RootState} from '../redux/store/store'
import {UseHandlePage} from "../hooks/useHandlePage";

const Home = () => {
    const dispatch = UseDispatchHook()
    const {searchText} = UseAppSelectorHook((state) => state.searchText);
    const {data, isLoading, latest} = UseAppSelectorHook(
        (state: RootState) => state.data,
    )
    const {handlePage, page, itemsOnePage} = UseHandlePage({text: 'articles'});

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

export default Home;
