import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { FC, useState } from 'react'
import { DropDownMenu } from './common/DropDownMenu'

const Header: FC = () => {
    const [openDropDown, useOpenDropDown] = useState<boolean>(false)

    const toggleOpenDropDown = () => useOpenDropDown(prev => !prev)

    return (
        <>
            <HeaderWrapper>
                <Link href='/'>
                    <div className='logo'>
                        <span />
                        <p className='logo__text'>Simon</p>
                    </div>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href='/sports'>Sports</Link>
                        </li>
                        <li>
                            <Link href='/fashion'>Fashion</Link>
                        </li>
                        <li>
                            <Link href='/luxury'>Luxury</Link>
                        </li>
                        <li onClick={toggleOpenDropDown}>
                            Account
                            {openDropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </li>
                    </ul>
                    {openDropDown && <DropDownMenu />}
                </nav>
                <div className='search__box'>
                    <SearchIcon className='icon' />
                    <input className='search' type='text' placeholder='Search...' />
                </div>
            </HeaderWrapper>
        </>

    )
}

const rotate = keyframes`
  50% {
    box-shadow: 0 0 9px white
  }
`


export const HeaderWrapper = styled.header`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.mainFontColor};

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;


    span {
      background-color: ${props => props.theme.colors.logoBg};
      width: 35px;
      height: 35px;
      border-radius: 3px;
      font-size: 18px;
      margin-right: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 3px white;
      animation: ${rotate} 10s linear infinite;

      &:after {
        content: "S";
        width: 10px;
        height: 23px;
      }
    }

    .logo__text {
      font-size: 18px;
    }
  }

  nav {
    position: relative;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    li {
      margin-right: 45px;

      &:last-child {
        margin-right: 0;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
      }

      a {
        font-size: 16px;
        padding: 0.3rem;
      }
    }

  }

  .search__box {
    position: relative;

    .icon {
      position: absolute;
      bottom: 20%;
      left: 20px;
    }

    .search {
      width: 224px;
      height: 40px;
      border-radius: 100px;
      background-color: #1F2937;
      border: none;
      color: white;
      padding: 0 50px;
      transition: box-shadow 250ms ease-in;

      &::placeholder {
        padding-left: 5px;
      }

      &:focus {
        outline: 1px solid transparent;
        box-shadow: 0 0 5px white;
      }
    }
  }
`
export default Header