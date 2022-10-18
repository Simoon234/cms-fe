import styled from "styled-components"
import {avatars} from "../../helpers/pickAvatarHelper";
import Image from "next/image";
import {useState} from "react";

interface Avatar {
    changeAvatar: (id: number) => void;
}

interface SelectEl {
    id: number;
}


export const ShowAvatars = ({changeAvatar}: Avatar) => {
    const [arr, setArr] = useState(avatars);
    const handlePick = ({id}: SelectEl) => {
        const checkedAvatars = arr.map((item) => {
            if (item.checked) {
                item.checked = false;
            }
            return item;
        })
        setArr(checkedAvatars.map((todo, j) => j + 1 !== id ? todo : ({...todo, checked: !todo.checked})))
        changeAvatar(id);
    };

    return (
        <Avatars>
            <div className='box'>
                {arr.map(({id, checked, avatar, width, height}, i) =>
                    <div className={`check_button ${checked ? 'checked' : 'not_checked'}`}
                         onClick={() => handlePick({id})} key={i}>
                        <Image src={avatar} alt='avatar' width={width} height={height}/>
                    </div>
                )}
            </div>
        </Avatars>
    )
}

export const Avatars = styled.div`
  margin-top: 20px;
  position: relative;

  .box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    .check_button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      margin-right: 20px;

      &:focus {
        border: 2px solid orange;
      }

      img {
        border-radius: 12px;
      }
    }

    .checked {
      border: 2px solid orange;
      border-radius: 12px;
      transition: 250ms ease-in-out;
    }
  }

`