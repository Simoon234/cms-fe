import styled from 'styled-components'
import Image from 'next/image'
import Categories from './common/Categories'
import { Author as TypeAuthor, Photo } from '../types'
import Author from './common/Author'

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
    const photo = latest?.attributes?.photo?.data?.map(item => item?.attributes)[0].formats?.thumbnail?.url

    return (
        <Home>
            {photo && <Image width={1200} height={600} src={`http://localhost:1337${photo}`} />}
            <div className='content__box'>
                <Categories category={latest?.attributes?.categories}
                            date={new Date(latest?.attributes?.createdAt).toLocaleString()} />
                <div className='content__box-mid'>
                    <h3>{latest?.attributes?.title}</h3>
                    <p>{latest?.attributes?.description}</p>
                </div>
                <Author job={latest?.attributes?.author?.data?.attributes?.job}
                        person={latest?.attributes?.author?.data?.attributes?.name} />
            </div>
        </Home>
    )
}


export const Home = styled.div`
  display: flex;
  margin-top: 62px;
  color: ${props => props.theme.font.h3FontColor};

  img {
    border-radius: 10px;
    width: 750px;
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