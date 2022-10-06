import { ReactNode } from "react";
import styled from 'styled-components'

export const LayoutApp = ({children}: {children: ReactNode}) => {
    return (
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    )
}


export const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`