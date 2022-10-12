import { GetServerSideProps } from 'next'
import { Box } from '../../../Components/common/Box'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import styled from 'styled-components'
import { API_URL } from '../../../api.url.config'
import { ResponseDataType } from '../../../types'
import {toast} from "react-toastify";


const AllArticles = (data: any) => {
    console.log(data)
    return (
        <>
            {data.data && data.data.map((item: ResponseDataType) =>
                <Box key={item.id} attributes={item.attributes} id={item.id} />,
            )}
            <PaginationWrapper>
                <Stack className='stack' spacing={2}>
                    <Pagination color='secondary' count={data.pageCount} />
                </Stack>
            </PaginationWrapper>
        </>
    )
}
export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  color: white;

  .stack {
    color: white;
  }
`

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