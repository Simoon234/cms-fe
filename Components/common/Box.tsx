import styled from 'styled-components'
import Image from 'next/image'
import {ResponseDataType} from '../../types'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import {useState} from 'react'
import {EditComponent} from './Edit'
import {API_URL} from '../../api.config'
import {toast} from 'react-toastify'
import {UseHomeRouter} from '../../hooks/useHomeRouter'


export const Box = (data: ResponseDataType) => {
    const [open, setOpen] = useState<boolean>(false);
    const {push} = UseHomeRouter();
    const edit = () => {
        setOpen(prev => !prev);
    }

    const close = () => {
        setOpen(false);
    }

    const deleteArticle = async () => {
        const res = await fetch(`${API_URL}/articles/${data.id}`, {
            method: 'DELETE',
        });
        if(!res.ok) {
            toast.error('Unexpected error');
        } else {
            toast.success('Deleted');
            await push('/article/all');
        }

        return await res.json();
    }


    const photo = data.attributes.photo.data.map((item) => item.attributes.formats.thumbnail.url)[0];
    console.log(photo)
    return (
        <>
            <BoxContainer>
                <div className='image__box'>
                    <Image src={`http://localhost:1337${photo}`} width={200} height={150}></Image>
                </div>
                <div className='header'>
                    <h4>Title</h4>
                    <p>{data.attributes.title.length > 40 ? `${data.attributes.title.slice(0, 20)}...` : data.attributes.title}</p>
                </div>
                <div className='header'>
                    <h4>Description</h4>
                    <p>{data.attributes.description.slice(0, 40)}...</p>
                </div>
                <div className='header'>
                    <h4>Created at</h4>
                    <p>{new Date(data.attributes.createdAt).toLocaleString()}</p>
                </div>
                <div className='group-icon'>
                    <IconButton aria-label='delete'>
                        <DeleteIcon onClick={deleteArticle} className='icon' />
                    </IconButton>
                    <IconButton aria-label='delete'>
                        <CreateIcon onClick={edit} className='icon' />
                    </IconButton>
                </div>
            </BoxContainer>
            {open && <EditComponent id={data.id} close={close}/>}
        </>

    )
}
export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-around;
  padding: 2rem 0;
  background-color: #2f3857;
  margin: 20px auto;
  border-radius: 10px;

  .image__box img {
    border-radius: 12px;
  }

  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    margin-right: 20px;

    h4 {
      font-size: 1.2rem;
      font-style: italic;
      margin-bottom: 20px;
    }
  }

  .group-icon {
    display: flex;
    flex-direction: column;
    color: #173dff;

    .icon {
      color: #ff9312;
    }
  }
`