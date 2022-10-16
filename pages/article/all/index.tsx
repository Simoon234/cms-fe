import {GetServerSideProps} from 'next'
import {Box} from '../../../Components/common/Box'
import {API_URL} from '../../../api.config'
import {ResponseDataType} from '../../../types'
import {UseAppSelectorHook} from '../../../hooks/useAppSelectorHook'
import {useEffect} from "react";
import {closeModal} from "../../../redux/closeModalSlice";
import {UseDispatchHook} from '../../../hooks/useDispatchHook'


const AllArticles = (data: any) => {
    const {id, isAuthMessage} = UseAppSelectorHook(state => state.user);
    const getAllArticlesByAuthor = data.data.filter((item: any) => {
        return item.attributes.author.data.id === id
    })
    const dispatch = UseDispatchHook();

    useEffect(() => {
        dispatch(closeModal(false))
    }, [dispatch])

    return (
        <>
            {(isAuthMessage === '' && id) ? getAllArticlesByAuthor && getAllArticlesByAuthor.map((item: ResponseDataType) =>
                <Box key={item.id} attributes={item.attributes} id={item.id}/>,
            ) : <h1>{isAuthMessage}</h1>}

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${API_URL}/articles?populate=*`);
    const data = await res.json();
    return {
        props: {
            data: data.data,
            pageCount: data.meta.pagination.pageCount,
        }
    }
}
export default AllArticles