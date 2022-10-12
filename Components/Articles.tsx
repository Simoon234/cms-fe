import Card from './common/Card'
import styled from 'styled-components'
import { Data, ResponseDataType } from '../types'
import { CardLoading } from './common/CardLoading'


const Articles = ({ data, isLoading }: { data: Data, isLoading: boolean }) => {
    const firstLetterUppercase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

    return (
        <ArticlesWrapper>
            {data.data && data.data.map((item: ResponseDataType) =>
                <>
                    {isLoading ? <CardLoading /> : <Card
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
    )
}

export const ArticlesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default Articles