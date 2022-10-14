import {FC} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {UseAppSelectorHook} from "../../hooks/useAppSelectorHook";

export const DropDownMenu: FC = () => {
    const {isLogged,} = UseAppSelectorHook(state => state.user);
    return (
        <Menu>
            <div className='wrap'>
                {isLogged ? (
                    <>
                        <Link href='/profile'>Profile</Link>
                        <Link href='/article/add'>Add article</Link>
                        <Link href='/article/all'>All articles</Link>
                        <Link href='/logout'>Logout</Link>
                    </>

                ) : (
                    <>
                        <Link href='/login'>Login</Link>
                        <Link href='/new-account'>New Account</Link>
                    </>
                )}
            </div>
        </Menu>

    )
}

export const Menu = styled.div`
  position: absolute;
  top: 0;
  right: -120px;
  background-color: #2d2b2b;
  border-radius: 12px;
  z-index: 200;

  .wrap {
    display: flex;
    flex-direction: column;

    a {
      padding: 5px 12px;
      margin: 3px 0;
    }
  }
`