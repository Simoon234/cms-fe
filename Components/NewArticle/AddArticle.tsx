import styled from 'styled-components'
import { UseHomeRouter } from '../../hooks/useHomeRouter'
import { Button } from '@mui/material'
import Layout from '../../layout/LayoutComponent'
import SendIcon from '@mui/icons-material/Send'
import { FormEvent, memo, useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from '../../api.url.config'

export const AddArticle = memo(() => {
    const [title, setTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [image, setImage] = useState<HTMLImageElement | null>(null)
    const { push } = UseHomeRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            if (title === '' || desc === '' || image === null || category === '') {
                return toast.error('Please, fill all required fields', {
                    theme: 'colored',
                })
            }

            const res = await fetch(`${URL}/articles`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        title,
                        description: desc,
                        categories: category,
                    },
                }),
            })

            if (!res.ok) {
                toast.error('Something went wrong')
            } else {
                const data = await res.json()
                await push(`/${data.data.id}/${data.data.attributes.categories}/${data.data.attributes.title}`)
            }

        } catch (e: any) {
            console.error(e)
        }
    }

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
                        <Button style={{ backgroundColor: 'orange' }} variant='contained' component='label'>
                            Upload
                            <input onChange={(e: any) => setImage(e.target.files[0])} hidden accept='image/*' multiple
                                   type='file' />
                        </Button>
                        <div className='buttons'>
                            <Button size='large' className='button' variant='contained' onClick={() => push('/')}>Go
                                back</Button>
                            <Button type='submit' className='send' endIcon={<SendIcon />} size='large'
                                    variant='contained'>SEND</Button>
                        </div>
                    </form>
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
`