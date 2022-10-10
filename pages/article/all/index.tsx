import { GetStaticProps } from 'next'
import { UseAppSelectorHook } from '../../../hooks/useAppSelectorHook'
import { useEffect, useState } from 'react'
import { UseDispatchHook } from '../../../hooks/useDispatchHook'
import { getData } from '../../../redux/dataSlice'
import { Box } from '../../../Components/common/Box'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import styled from 'styled-components'


const AllArticles = () => {
    const dispatch = UseDispatchHook()
    const { data: { data }, isLoading, totalPages } = UseAppSelectorHook(state => state.data)
    const [page, setPage] = useState<number>(1)
    const [itemsOnePage, setItemsOnePage] = useState<number>(3)
    useEffect(() => {
        dispatch(getData({
            page,
            itemsOnePage,
        }))
    }, [dispatch, page, itemsOnePage])
    return (
        <>
            {data && data.map((item: any) =>
                <Box attributes={item.attributes} id={item.id} />,
            )}
            <PaginationWrapper>
                <Stack className='stack' spacing={2}>
                    <Pagination color='secondary' count={totalPages.totalPages} />
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

export const getStaticProps: GetStaticProps = () => {

    return {
        props: {},
    }
}

export default AllArticles