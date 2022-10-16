import {UseAppSelectorHook} from "../../hooks/useAppSelectorHook";

const Profile = () => {
    const user = UseAppSelectorHook(state => state.user);
    return (
        <div>
            <p>{user.username}</p>
        </div>
    )
};


export default Profile;