import styled from 'styled-components'
import {Button} from '@mui/material'
import {useRouter} from 'next/router'

const PageNotFound = () => {
    const router = useRouter()
    const goHome = () => router.push('/')
    return (
        <>
            <Wrapper>
                <p className='number'>404</p>
                <small>Sorry, this page does not exist.</small>
                <Button className='button' size='large' onClick={() => goHome()} variant='outlined'>Home</Button>
            </Wrapper>
        </>
    )
}

export const Wrapper = styled.div`
  height: calc(100vh - 55vh);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: orange;
  }

  small {
    margin-bottom: 2rem;
    font-size: 1.9rem;
    color: orange;
  }

  .button {
    background: #cacaca;
    color: black;
    transition: 250ms ease-in-out;
    font-family: inherit;
    border: none;
    width: 120px;

    &:hover {
      background-color: orange;
      color: white;
    }
  }
}

.icon {
  margin: 20px 0;
  background: #6c6868;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: #FFA500;
  cursor: pointer;
  transition: 250ms ease;
  
  &:hover {
    transform: translateY(-6px);
  }
}

.number {
  font-size: 100px;
  margin-bottom: 2rem;
`

export default PageNotFound