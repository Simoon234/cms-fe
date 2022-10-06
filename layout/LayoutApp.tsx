import { ReactNode } from 'react'
import styled from 'styled-components'

const LayoutApp = ({ children }: { children: ReactNode }) => {
    return (
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    )
}

export default LayoutApp

export const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`