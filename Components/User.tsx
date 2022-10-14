import {UseDispatchHook} from "../hooks/useDispatchHook";
import {useEffect} from "react";
import {fetchUser} from "../redux/userSlice";


export const User = () => {
    const dispatch = UseDispatchHook();
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            dispatch(fetchUser(localStorage.getItem('token')?.toString() as string));
        }
    }, [dispatch]);
    return (
        <>
        </>
    );
}