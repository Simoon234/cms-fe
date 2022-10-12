import Stack from "@mui/material/Stack";
import styled from "styled-components";
import Pagination from '@mui/material/Pagination'

interface Pagination {
    handlePage: (e: any, value: number) => void;
    totalPages: number;
    page: number;
}

export const PaginationCompo = ({handlePage, totalPages, page}: Pagination) => {


    return (
        <PaginationWrapper>
            <Stack className='stack' spacing={10}>
                <Pagination onChange={handlePage} color='secondary' page={page} count={totalPages}/>
            </Stack>
        </PaginationWrapper>
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