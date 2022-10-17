import {FC} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {UseAppSelectorHook} from "../../hooks/useAppSelectorHook";
import {logout} from "../../redux/userSlice";
import {UseHomeRouter} from "../../hooks/useHomeRouter";
import {UseDispatchHook} from "../../hooks/useDispatchHook";
import {toast} from "react-toastify";

export const DropDownMenu: FC = () => {
    const {isLogged, username, email, isSuccessLogin} = UseAppSelectorHook(state => state.user);

    console.log(isLogged, username, email, isSuccessLogin)
    const dispatch = UseDispatchHook();
    const {push} = UseHomeRouter();
    const handleLogout = async () => {
        const confirmIt = confirm('Are you sure you want to log out?');
        if (!confirmIt) return;
        dispatch(logout());
        await push('/');
        toast.success('Successfully, log out!', {
            pauseOnHover: false
        })
    }

    return (
        <Menu>
            <div className='wrap'>
                {isLogged ? (
                    <>
                        <Link href='/profile'>Profile</Link>
                        <Link href='/article/add'>Add article</Link>
                        <Link href='/article/all'>All articles</Link>
                        <span onClick={handleLogout}>Logout</span>
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

    span {
      padding: 5px 12px;
      margin: 3px 0;
      cursor: pointer;
    }

    a {
      padding: 5px 12px;
      margin: 3px 0;
    }
  }
`