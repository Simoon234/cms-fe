import styled from 'styled-components'
import Image from 'next/image'
import Categories from './common/Categories'
import {Author as TypeAuthor, Photo} from '../types'
import Author from './common/Author'
import {DEFAULT_URL} from "../api.config";
import Link from "next/link";
import {UseWidthHook} from "../hooks/useWidthHook";

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
        id: number;
    }
}


export const HomeLp = ({latest}: Latest) => {
    const photo = latest?.attributes?.photo?.data?.map(item => item?.attributes)[0].formats?.large?.url
    const {width} = UseWidthHook();


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
                    <p>{width && width.width > 1300 ? (latest?.attributes?.description.length > 500 ? latest?.attributes?.description.slice(0, 300) : latest?.attributes?.description) : latest?.attributes?.description.slice(0, 150)}...</p>
                    {width && width.width > 1100 ? '' : <Link
                        href={`http://localhost:3000/${latest?.id}/${latest?.attributes?.categories}/${latest?.attributes?.title}`}>Read
                        more</Link>}
                </div>
                <Author job={latest?.attributes?.author?.data?.attributes?.job}
                        src={latest?.attributes?.author?.data?.attributes?.avatar}
                        person={latest?.attributes?.author?.data?.attributes?.firstname}/>
            </div>
        </Home>
    )
}


export const Home = styled.div`
  display: flex;
  margin-top: 62px;
  color: ${props => props.theme.font.h3FontColor};

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  .image__box {
    img {
      border-radius: 12px;
    }
  }

  .content__box {
    margin-left: 2rem;
    margin-top: 0.9rem;

    @media (max-width: 1100px) {
      margin-left: 0;
    }

    .content__box-mid {
      p {
        max-width: 280px;
      }


      a {
        padding: 0.5rem;
        border-radius: 4px;
        background: #f29f09;
        color: #f1eeee;
        transition: 250ms ease-out;

        &:hover {
          color: white;
          box-shadow: 0 0 12px black;
        }
      }

      @media (max-width: 1100px) {
        p, h3 {
          max-width: 100%;
          text-align: center;
        }

        p {
          margin-bottom: 1.5rem;
        }
      }

    }


  }
`

export default HomeLp