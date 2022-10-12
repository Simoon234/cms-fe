import Card from './common/Card'
import styled from 'styled-components'
import {Data, ResponseDataType} from '../types'
import {CardLoading} from './common/CardLoading'
import {PaginationCompo} from "./common/Pagination";

interface Articles {
    data: Data,
    isLoading: boolean;
    totalPages: number;
    page: number;
    handlePage: (e: any, value: number) => void;
}

const Articles = ({data, isLoading, totalPages, page, handlePage}: Articles) => {
    const firstLetterUppercase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)
    return (
        <ArticlesSection>
            <h1 className='header'>Articles</h1>
            <ArticlesWrapper>
                {data.data && data.data.map((item: ResponseDataType) =>
                    <>
                        {isLoading ? <CardLoading/> : <Card
                            description={item.attributes.description.length < 300 ? item.attributes.description : `${item.attributes.description.slice(0, 166)}...`}
                            key={item.id}
                            id={item.id.toString()}
                            avatar={`http://localhost:1337`}
                            category={item.attributes.categories}
                            job={item.attributes.author.data.attributes.job}
                            person={`${firstLetterUppercase(item.attributes.author.data.attributes.name)} ${item.attributes.author.data.attributes.surname.slice(0, 2)}.`}
                            date={new Date(item.attributes.createdAt).toLocaleString()}
                            title={item.attributes.title}
                            src={`http://localhost:1337${item.attributes.photo.data.map((item) => item.attributes.formats.thumbnail.url)}`}
                            height={item.attributes.photo.data.map((item) => item.attributes.height)[0]}
                            width={item.attributes.photo.data.map((item) => item.attributes.width)[0]}
                        />}
                    </>,
                )}
            </ArticlesWrapper>
            <div>
            </div>
            <PaginationCompo handlePage={handlePage} totalPages={totalPages} page={page}/>
        </ArticlesSection>
    )
}

export const ArticlesSection = styled.section`
  position: relative;

  h1 {
    margin: 40px 0;
    font-size: 3rem;
    color: white;
  }
`

export const ArticlesWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export default Articles