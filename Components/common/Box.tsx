import styled from 'styled-components'
import Image from 'next/image'
import img from '../../public/assets/mockImg2.jpg'
import { ResponseDataType } from '../../types'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'


export const Box = (data: ResponseDataType) => {
    return (
        <BoxContainer>
            <div className='image__box'>
                <Image src={img} width={150} height={150}></Image>
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
                    <DeleteIcon className='icon' />
                </IconButton>
                <IconButton aria-label='delete'>
                    <CreateIcon className='icon' />
                </IconButton>
            </div>
        </BoxContainer>
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