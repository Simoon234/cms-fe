import {UseDispatchHook} from "../hooks/useDispatchHook";
import {useEffect} from "react";
import {fetchUser} from "../redux/userSlice";


export const User = () => {
    const dispatch = UseDispatchHook();
    useEffect(() => {
        (async () => {
            if (localStorage.getItem('token') && localStorage.getItem('token') !== null) {
                dispatch(await fetchUser(localStorage.getItem('token')?.toString() as string));
            }
        })()
    }, [dispatch]);
    return (
        <>
        </>
    );
}