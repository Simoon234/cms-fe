import {UseAppSelectorHook} from "../../hooks/useAppSelectorHook";
import {UseDispatchHook} from "../../hooks/useDispatchHook";
import {UseHomeRouter} from "../../hooks/useHomeRouter";
import {logout} from "../../redux/userSlice";

const Profile = () => {
    const user = UseAppSelectorHook(state => state.user);
    const router = UseHomeRouter();
    const dispatch = UseDispatchHook();
    const handleLogout = async () => {
        dispatch(logout());
        await router.push('/');
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <p>{user.username}</p>
        </div>
    )
};


export default Profile;