import styled from 'styled-components'
import {UseHomeRouter} from '../../hooks/useHomeRouter'
import {Button} from '@mui/material'
import Layout from '../../layout/LayoutComponent'
import SendIcon from '@mui/icons-material/Send'
import React, {FormEvent, useCallback, useEffect, useState} from 'react'
import {toast} from 'react-toastify'
import {API_URL} from '../../api.url.config'
import Image from "next/image";
import {CardLoading} from "../common/CardLoading";
import {GlobalLoading} from "../common/GlobalLoading";


// eslint-disable-next-line react/display-name
export const AddArticle = React.memo(() => {
    const [title, setTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [image, setImage] = useState<HTMLImageElement | null>(null)
    const [prevImg, setPrevImg] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)
    const { push } = UseHomeRouter();


    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('files', image as any);
        formData.append('ref', 'articles');
        const res = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        return {
            id: data[0]?.id
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        try {
            if (title === '' || desc === '' || image === null || category === '') {
                setLoading(false);
                return toast.error('Please, fill all required fields', {
                    theme: 'colored',
                })
            }
            const {id} = await handleUpload();
            const res = await fetch(`${API_URL}/articles`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        title,
                        description: desc,
                        categories: category,
                        photo: id
                    },
                }),
            })
            if (!res.ok) {
                setLoading(false);
                toast.error('Something went wrong')
            } else {
                const data = await res.json();
                await push(`/${data.data.id}/${data.data.attributes.categories}/${data.data.attributes.title}`)
                setLoading(false);
            }

        } catch (e: any) {
            console.error(e.message);
            setLoading(false);

        }
    }

    const handleChanges = useCallback((e: any) => {
        setImage(e.target.files[0]);
        setPrevImg(URL.createObjectURL(e.target.files[0]));
    },[]);



    return (
        <Layout title='Add new article' description='Make new article' keywords='add,post,new,article'>
            <FormWrapper>
                <div className='content'>
                    <h2>Add article</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='title'>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} id='title'
                                   type='text' placeholder='Title...' />
                        </label>
                        <label htmlFor='description'>
                            <textarea value={desc} id='description' onChange={(e) => setDesc(e.target.value)}
                                      placeholder='Description...' />
                        </label>
                        <select onChange={(e) => setCategory(e.target.value)}>
                            <option value='#'>Select category</option>
                            <option value='sport'>sport</option>
                            <option value='fashion'>fashion</option>
                            <option value='luxury'>luxury</option>
                        </select>
                        <Button style={{backgroundColor: 'orange'}} variant='contained' component='label'>
                            Upload {image ? (image?.name) : ""}
                            <input onChange={handleChanges} hidden accept='image/*' multiple
                                   type='file'/>
                        </Button>
                        <div className='buttons'>
                            <Button size='large' className='button' variant='contained' onClick={() => push('/')}>Go
                                back</Button>
                            <Button type='submit' className='send' endIcon={<SendIcon />} size='large'
                                    variant='contained'>SEND</Button>
                        </div>
                    </form>
                    <div className='imgShow'>
                        {prevImg && <Image src={prevImg} width={300} height={200} alt='test'/>}
                    </div>
                    {loading && <GlobalLoading/>}
                </div>
            </FormWrapper>
        </Layout>
    )
})

export const FormWrapper = styled.div`
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: white;

    form {
      display: flex;
      flex-direction: column;
      width: 60%;
      padding: 1rem;

      label, select {
        margin-bottom: 22px;
      }

      input, textarea, select {
        width: 100%;
        font-size: 1.2rem;
        font-family: inherit;
        padding: 0.5rem;
        border-radius: 12px;
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .send {
          background-color: #f7c70f;
        }
      }
    }
  }
  
  .imgShow {
    
    img {
      border-radius: 12px;
      
    }
  }
`