import styled from "styled-components"
import { spin } from "./CardLoading"

export const GlobalLoading = () => {
    return (
        <SectionStyle>
            <div className='loaderGlobalMid'/>
        </SectionStyle>
    )
}

export const  SectionStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(57, 53, 53, 0.53);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;

  .loaderGlobalMid {
    left: 35%;
    bottom: 40%;
    margin: 0 auto;
    z-index: 1;
    width: 120px;
    height: 120px;
    border: 2px solid #151414;
    border-radius: 50%;
    border-top: 5px solid #ee8c02;
    -webkit-animation: spin 250ms linear infinite;
    animation: ${spin} 1200ms linear infinite;
  }
`
