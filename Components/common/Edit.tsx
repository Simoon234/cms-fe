import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'
import {Button} from '@mui/material'
import React, {FormEvent, useCallback, useEffect, useState} from 'react'
import {API_URL} from '../../api.config'
import {toast} from 'react-toastify'
import {UseHomeRouter} from '../../hooks/useHomeRouter'
import Image from "next/image";
import {GlobalLoading} from "./GlobalLoading";

interface CloseModal {
    close: () => void;
    id: number;
}


export const EditComponent = ({close, id}: CloseModal) => {
    const [article, setArticle] = useState<any>()
    const {push} = UseHomeRouter()

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/articles/${id}?populate=*`)
            const {data} = await res.json()
            setArticle(data.attributes)
        })()
    }, [id])

    const [title, setTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [image, setImage] = useState<HTMLImageElement | null>(null)
    const photo = article?.photo?.data[0]?.attributes?.formats?.thumbnail?.url;
    const [prevImg, setPrevImg] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)

    const handleUpload = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('files', image as any);
        formData.append('ref', 'articles');
        const res = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        setLoading(false);
        return {
            imageId: data[0]?.id
        }
    }
    const deleteOldImage = async () => {
        const oldImageId = String(article.photo.data[0].id);
        const res = await fetch(`${API_URL}/upload/files/${oldImageId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        await res.json();
    }


    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        try {

            if (title === '') {
                setLoading(false);
                return setTitle(article?.title)
            }

            if (desc === '') {
                setLoading(false);
                return setDesc(article?.description)
            }

            if (image === null) {
                setLoading(false);
                return setImage(photo)
            }

            const {imageId} = await handleUpload();
            const res = await fetch(`${API_URL}/articles/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        title,
                        description: desc,
                        photo: imageId
                    },
                }),
            })
            const a = await deleteOldImage();
            console.log(a)
            if (!res.ok) {
                toast.error('Something went wrong')
            } else {
                close()
                await res.json()
                setLoading(false);
                await push(`/article/all`)
            }

        } catch (e: any) {
            console.error(e)
        }
    }

    const handleChanges = useCallback((e: any) => {
        setImage(e.target.files[0]);
        setPrevImg(URL.createObjectURL(e.target.files[0]));
    }, []);

    return (
        <Edit>
            <div onClick={close} className='layer'></div>
            <div className='content__layout'>
                <div className='content'>
                    <h1>Edit</h1>
                    <span onClick={close} className='close'>X</span>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor=''>
                                <span>Title</span>
                                <input type='text' placeholder={article?.title}
                                       onChange={(e) => setTitle(e.target.value)}
                                       value={title}/>
                            </label>
                            <label htmlFor=''>
                                <span>Description</span>
                                <textarea rows={Number(10)} cols={Number(10)} placeholder={article?.description}
                                          onChange={(e) => setDesc(e.target.value)} value={desc}/>
                            </label>
                        </div>
                        <div>
                            {photo && !prevImg &&
                                <Image src={`http://localhost:1337${photo}`} width={200} height={100} alt='photo'/>}
                            {prevImg && <Image src={prevImg} width={300} height={200} alt='test'/>}
                            <label htmlFor=''>
                                <span>Image</span>
                                <input type='file' onChange={handleChanges}/>
                            </label>
                            <Button type='submit' className='send' endIcon={<SendIcon/>} size='large'
                                    variant='contained'>SAVE</Button>
                        </div>
                    </form>
                </div>
            </div>
            {loading && <GlobalLoading/>}
        </Edit>
    )
}

export const Edit = styled.div`
  position: relative;

  .close {
    position: absolute;
    left: 5%;
    top: 5%;
    font-size: 2rem;
    cursor: pointer;
    color: #fff
  }

  .layer {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(57, 50, 50, 0.33);
    z-index: 30;
    overflow: hidden;
  }

  .content__layout {
    position: fixed;
    top: 5%;
    background: #3D3F48;
    border: 4px solid white;
    border-radius: 12px;
    z-index: 200;
    width: 70%;

    .content {
      text-align: center;

      h1 {
        color: #e68317;
        padding: 20px 9px;
      }

      form {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 2rem;
        height: 80vh;
        color: white;

        @media (max-width: 1050px) {
          flex-direction: column;
          overflow: scroll;
          overflow-x: hidden;
        }

        label, textarea {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          padding: 1rem;
          resize: none;

          span {
            margin-bottom: 20px;
            color: #e68317;
            font-size: 2rem;
          }
        }

        input {
          margin-bottom: 10px;
          padding: 1rem;
          min-width: 450px;
        }

        @media (max-width: 730px) {
          input {
            min-width: 300px;
          }
        }
        @media (max-width: 480px) {
          input {
            min-width: 150px;
          }
        }

      }
    }
  }
`
