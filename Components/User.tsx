import {UseDispatchHook} from "../hooks/useDispatchHook";
import {useEffect} from "react";
import {fetchUser} from "../redux/userSlice";
import {UseAppSelectorHook} from "../hooks/useAppSelectorHook";


export const User = () => {
    const dispatch = UseDispatchHook();
    const {isSuccessLogin} = UseAppSelectorHook(state => state.user);
    useEffect(() => {
        (async () => {
            if (localStorage.getItem('token') !== null || localStorage.getItem('token') !== '') {
                dispatch(await fetchUser(localStorage.getItem('token')?.toString() as string));
            }
        })()
    }, [dispatch, isSuccessLogin]);
    return (
        <>
        </>
    );
}