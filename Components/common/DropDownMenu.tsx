import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export const DropDownMenu: FC = () => {
    return (
        <Menu>
            <div className='wrap'>
                <Link href='/login'>Login</Link>
                <Link href='/new-account'>New Account</Link>
                <Link href='/profile'>Profile</Link>
            </div>
        </Menu>

    )
}

export const Menu = styled.div`
  position: absolute;
  top: 0;
  right: -96px;
  background-color: #2d2b2b;
  border-radius: 12px;

  .wrap {
    display: flex;
    flex-direction: column;

    a {
      padding: 5px 12px;
      margin: 3px 0;
    }
  }
`