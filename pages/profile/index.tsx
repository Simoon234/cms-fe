import {UseAppSelectorHook} from "../../hooks/useAppSelectorHook";
import {UseDispatchHook} from "../../hooks/useDispatchHook";
import {ChangeEvent, FormEvent, useCallback, useEffect, useState} from "react";
import {closeModal} from "../../redux/closeModalSlice";
import styled from "styled-components";
import Layout from "../../layout/LayoutComponent";
import Image from "next/image";
import {API_URL} from "../../api.config";
import {toast} from "react-toastify";
import {UseHomeRouter} from "../../hooks/useHomeRouter";
import {ShowAvatars} from "../../Components/common/ShowAvatars";
import {pickAvatarHelper} from "../../helpers/pickAvatarHelper";

const Profile = () => {
    const {user} = UseAppSelectorHook(state => state.user);
    const {push} = UseHomeRouter();
    const [changeAv, setChangeAv] = useState(false);
    const dispatch = UseDispatchHook();
    const [profile, setProfile] = useState({
        email: user.email === '' ? user.email : user.email,
        bio: user && user.bio,
        avatar: user && user.avatar,
    })


    useEffect(() => {
        dispatch(closeModal(false))
    }, [dispatch])


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const res = await fetch(`${API_URL}/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        });
        await res.json();
        toast.success('Profile updated. Reload page.')
        await push('/profile')
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target as HTMLInputElement;
        setProfile((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const changeAvatar = useCallback((id: number) => {
        const avatar = pickAvatarHelper(id);
        if (!avatar) return;
        setProfile(prev => ({
            ...prev,
            avatar: avatar.toString()
        }))
    }, []);

    return (
        <Layout title='Profile' description='You can change your profile details here'
                keywords='profile, update, details'>
            <UserProfile>
                <Image alt='profile avatar' src={user.avatar} width={150} height={150}/>
                <p>{user.firstname} {user.lastname}</p>
                <p>{user.bio === null ? 'No data provided' : user.bio}</p>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className='first__level'>
                        <label htmlFor="email">Email</label>
                        <input
                            value={profile.email}
                            onChange={handleChange}
                            name='email'
                            id="email"
                            type="email"
                            placeholder="Enter email"
                        />
                        <label htmlFor="avatar">Avatar</label>
                        <input
                            value={profile.avatar}
                            name='avatar'
                            id="avatar"
                            placeholder="Avatar"
                        />
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            value={profile?.bio as string}
                            onChange={handleChange}
                            name='bio'
                            id="bio"
                            placeholder="Tell us about yourself"
                        />
                    </div>
                    <button className='send' type='submit'>Update</button>
                </form>
                <button className='avatar__pick' onClick={() => setChangeAv(prev => !prev)}>Choose Avatar</button>
                {changeAv && <ShowAvatars changeAvatar={changeAvatar}/>}
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

  span {
    border-radius: 30px;
  }

  p {
    margin-top: 20px;
  }

  .error {
    color: red;
    text-align: center;
    font-size: 1.4rem;
  }


  form {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 950px) {
      width: 90%;
    }

    label {
      font-size: 1.5rem;
      font-weight: bold;
      display: block;
      text-align: left;
      margin: 1rem 0 0.2rem;
      color: #dfdad8;
    }

    input:focus {
      border: 2px solid #4299e1;
    }

    input::placeholder {
      color: #a0aec0;
    }

    input.input-error,
    select.input-error {
      border: 4px solid #e96666;
    }

    .send:disabled {
      opacity: 0.35;
    }

    input, textarea, select {
      width: 100%;
      font-size: 1.2rem;
      font-family: inherit;
      padding: 0.5rem;
      border-radius: 12px;
      outline: none;

    }

    .send {
      margin: 30px 0;
      padding: 0.5rem;
      background-color: #e3d8ca;
      border: 1px solid #232323;
      cursor: pointer;
      font-family: inherit;
      font-size: 1.5rem;
      color: #000000;
      border-radius: 12px;
      transition: 250ms ease-in-out;

      &:hover {
        background-color: #232323;
        border: 1px solid #e3d8ca;
        color: white;
      }
    }
  }

  .avatar__pick {
    padding: 0.5rem;
    background-color: #e3d8ca;
    border: 1px solid #232323;
    cursor: pointer;
    font-family: inherit;
    font-size: 1.5rem;
    color: #000000;
    border-radius: 12px;
    transition: 250ms ease-in-out;

    &:hover {
      background-color: #232323;
      border: 1px solid #e3d8ca;
      color: white;
    }
  }
`


export default Profile;