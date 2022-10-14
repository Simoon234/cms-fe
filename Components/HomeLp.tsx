import styled from 'styled-components'
import Image from 'next/image'
import Categories from './common/Categories'
import {Author as TypeAuthor, Photo} from '../types'
import Author from './common/Author'
import {DEFAULT_URL} from "../api.config";

interface Latest {
    latest: {
        attributes: {
            title: string;
            description: string;
            categories: string;
            author: TypeAuthor;
            createdAt: string;
            photo: Photo;
        }
    }
}


export const HomeLp = ({ latest }: Latest) => {
    const photo = latest?.attributes?.photo?.data?.map(item => item?.attributes)[0].formats?.large?.url
    return (
        <Home>
            <div className='image__box'>
                {photo && <Image alt='latest image' width={1000} height={600} src={`${DEFAULT_URL}${photo}`}/>}
            </div>
            <div className='content__box'>
                <Categories category={latest?.attributes?.categories}
                            date={new Date(latest?.attributes?.createdAt).toLocaleString()}/>
                <div className='content__box-mid'>
                    <h3>{latest?.attributes?.title}</h3>
                    <p>{latest?.attributes?.description.slice(0, 300)}...</p>
                </div>
                <Author job={latest?.attributes?.author?.data?.attributes?.job}
                        person={latest?.attributes?.author?.data?.attributes?.firstname}/>
            </div>
        </Home>
    )
}


export const Home = styled.div`
  display: flex;
  margin-top: 62px;
  color: ${props => props.theme.font.h3FontColor};

  .image__box {
    img {
      border-radius: 12px;
    }
  }

  .content__box {
    margin-left: 31px;
    margin-top: 15px;


    .content__box-mid {
      p {
        width: 283px;
      }
    }


  }
`

export default HomeLp