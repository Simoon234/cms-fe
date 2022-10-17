import {UseAppSelectorHook} from "../../hooks/useAppSelectorHook";
import {UseDispatchHook} from "../../hooks/useDispatchHook";
import {useEffect} from "react";
import {closeModal} from "../../redux/closeModalSlice";
import styled from "styled-components";
import Layout from "../../layout/LayoutComponent";
import Image from "next/image";

const Profile = () => {
    const {user} = UseAppSelectorHook(state => state.user);
    const dispatch = UseDispatchHook();
    useEffect(() => {
        dispatch(closeModal(false))
    }, [dispatch])


    return (
        <Layout title='Profile' description='You can change your profile details here'
                keywords='profile, update, details'>
            <UserProfile>
                <Image alt='profile avatar' src={user.avatar} width={150} height={150}/>
                <p>{user.firstname} {user.lastname}</p>
                <p>{user.bio === null ? 'No data provided' : user.bio}</p>
            </UserProfile>
        </Layout>
    )
};

export const UserProfile = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 20px;
  }
`


export default Profile;