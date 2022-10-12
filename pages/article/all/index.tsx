import {GetServerSideProps} from 'next'
import {Box} from '../../../Components/common/Box'

import {API_URL} from '../../../api.config'
import {ResponseDataType} from '../../../types'


const AllArticles = (data: any) => {
    return (
        <>
            {data.data && data.data.map((item: ResponseDataType) =>
                <Box key={item.id} attributes={item.attributes} id={item.id}/>,
            )}
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