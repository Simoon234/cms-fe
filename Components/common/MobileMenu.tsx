import Link from "next/link";
import styled, {keyframes} from 'styled-components';
import SearchIcon from "@mui/icons-material/Search";
import {UseHomeRouter} from "../../hooks/useHomeRouter";
import {useSearchHook} from "../../hooks/useSearchHook";
import {UseScrollAndSearch} from "../../hooks/useScrollAndSearch";
import {UseAppSelectorHook} from "../../hooks/useAppSelectorHook";
import {logout} from "../../redux/userSlice";
import {toast} from "react-toastify";
import {UseDispatchHook} from "../../hooks/useDispatchHook";


export const Menu = ({active, setOpen}: { active: boolean, setOpen: (x: boolean) => void }) => {
    const {handleSearchTitle, onChange, term} = useSearchHook();
    const {handleSearch, handleOnChange, text} = UseScrollAndSearch();
    const {isLogged} = UseAppSelectorHook(state => state.user);
    const dispatch = UseDispatchHook();
    const {pathname, push} = UseHomeRouter();

    const handleLogout = async () => {
        const confirmIt = confirm('Are you sure you want to log out?');
        if (!confirmIt) return;
        dispatch(logout());
        await push('/');
        toast.success('Successfully, log out!', {
            pauseOnHover: false
        })
    }

    const searchInFolder = async (e: any) => {
        setOpen(false)
        await handleSearchTitle(e)
    }

    const searchMainPath = async (e: any) => {
        setOpen(false)
        await handleSearch(e)
    }
    return (
        <StyledMenu active={active}>
            {(pathname === '/fashion' || pathname === '/luxury' || pathname === '/sports') ?
                <div className='search__box'>
                    <SearchIcon className='icon'/>
                    <form onSubmit={searchInFolder}>
                        <input onChange={onChange} value={term} className='search' type='text'
                               placeholder='Search...'/>
                    </form>
                </div> :
                <div className='search__box'>
                    <SearchIcon className='icon'/>
                    <form onSubmit={searchMainPath}>
                        <input onChange={handleOnChange} value={text} className='search' type='text'
                               placeholder='Search...'/>
                    </form>
                </div>}
            <Link href='/sports'>Sports</Link>
            <Link href='/fashion'>Fashion</Link>
            <Link href='/luxury'>Luxury</Link>
            {isLogged ? <> <Link href='/profile'>Profile</Link>
                <Link href='/article/add'>Add article</Link>
                <Link href='/article/all'>All articles</Link>
                <span onClick={handleLogout}>Logout</span></> : <>
                <Link href='/login'>Login</Link>
                <Link href='/new-account'>New Account</Link>
            </>}
        </StyledMenu>

    )
}


const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(2rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }`

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(2rem);
  }
`


interface T {
    active: boolean;
}

export const StyledMenu = styled.nav<T>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  text-align: left;
  background-color: #3E4654;
  border-left: 3px solid white;
  padding: 4rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;
  transition: animation 0.5s ease-out;
  animation: ${({active}) => active ? fadeIn : fadeOut} 0.5s linear;


  .search__box {
    position: relative;
    margin-top: 2rem;

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

  a, span {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1.8rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: white;
    cursor: pointer;
  }
`;