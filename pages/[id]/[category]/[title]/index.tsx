import styled from 'styled-components'
import Categories from '../../../../Components/common/Categories'
import Author from '../../../../Components/common/Author'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ResponseDataType } from '../../../../types'

interface Article {
    obj: {
        article: ResponseDataType;
        author: any
    }
}

const SingleArticleInfoDetails = ({ obj }: Article) => {
    const photo = obj.article.attributes.photo.data.map(item => item.attributes)[0]

    console.log(obj.article.attributes.categories)
    return (
        <Details>
            <Categories category={obj?.article?.attributes?.categories}
                        date={new Date(obj?.article?.attributes?.createdAt).toLocaleString()} />
            <div className='content'>
                <h3>
                    {obj?.article?.attributes?.title}
                </h3>
            </div>
            <div className='author'>
                <Author
                    src={`http://localhost:1337${obj?.author?.attributes?.avatar?.data?.attributes?.formats?.thumbnail?.url}`}
                    job={obj?.article?.attributes?.author?.data?.attributes?.job}
                    person={obj?.article?.attributes?.author?.data?.attributes?.name} />
            </div>
            <Image src={`http://localhost:1337${photo?.formats?.thumbnail?.url}`} width={photo?.width}
                   height={photo?.height} />
            <div className='description'>
                <p>{obj?.article?.attributes?.description}</p>
            </div>
        </Details>
    )
}

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 77px;
  text-align: center;

  .content {
    width: 526px;
    display: flex;
    align-items: center;
    margin: 0 auto;

    h3 {
      margin: 11px 0 30px 0;
      width: 100%;
    }
  }

  img {
    border-radius: 12px;
    transition: 200ms ease-in-out;

    &:hover {
      border-radius: 12px;
      transform: scale(1.2);
    }
  }

  .author {
    margin-bottom: 28px;
  }

  .description {
    margin-top: 70px;
    text-align: left;
    width: 750px;

    .first {
      margin-bottom: 20px;
    }

    p {
      line-height: 35px;
    }
  }
`

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`http://localhost:1337/api/articles?populate=author,photo`)
    const data = await res.json()
    const paths = data.data.map((item: ResponseDataType) => ({
        params: {
            id: item.id.toString(),
            category: item.attributes.categories,
            title: item.attributes.title,
        },
    }))
    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`http://localhost:1337/api/articles?populate=author,photo`)
    const data = await res.json()
    const article = data.data.find((item: ResponseDataType) => (item.id.toString()) === context.params?.id)

    const user = await fetch(`http://localhost:1337/api/authors?populate=avatar`)
    const userData = await user.json()


    const author = userData.data.find((user: any) => user.id === article.attributes.author.data.id)

    const obj = {
        article,
        author,
    }

    return {
        props: {
            obj,
        },
    }
}

export default SingleArticleInfoDetails