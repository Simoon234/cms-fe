import styled, { keyframes } from 'styled-components'
import { Cards } from './Card'

export const CardLoading = () => {
    return (
        <Cards>
            <Loader></Loader>
        </Cards>
    )

}

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
{
  position: absolute;
  left: 35%;
  bottom: 40%;
  margin: 0 auto;
  z-index: 1;
  width: 120px;
  height: 120px;
  border: 2px solid #000000;
  border-radius: 50%;
  border-top: 2px solid #ee8c02;
  -webkit-animation: spin 2s linear infinite;
  animation: ${spin} 2s linear infinite;
}
`