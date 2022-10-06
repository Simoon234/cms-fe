import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from 'next/link'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <FooterFoot>
            <h5>Copyright (c) {year}</h5>
            <Link href='https://github.com/Simoon234'><GitHubIcon className='git' /></Link>
        </FooterFoot>
    )
}

export const FooterFoot = styled.div`
  margin: 100px 0;
  text-align: center;

  h5 {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 3px;
    color: ${props => props.theme.font.pFontColor};
    margin-bottom: 20px;
  }

  .git {
    color: white;
    cursor: pointer;
    font-size: 33px;
    transition: 250ms ease;

    &:hover {
      transform: scale(1.2);
      color: #c36adb;
    }
  }
`

export default Footer