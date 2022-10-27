import styled from 'styled-components'
import Image from 'next/image'
import Categories from './Categories'
import Author from './Author'
import {UseHomeRouter} from '../../hooks/useHomeRouter'
import {useState} from 'react'
import {GlobalLoading} from './GlobalLoading'

interface Card {
    id: string
    src: any
    category: string
    date: string
    title: string
    description: string
    job: string
    person: string
    avatar: string
}

const Card = ({
                  src,
                  category,
                  date,
                  description,
                  title,
                  job,
                  person,
                  avatar,
                  id,
              }: Card) => {
    const {push} = UseHomeRouter()
    const [loading, setLoading] = useState(false)
    const illegal = /[&\/\\#,+()$~%.'":*?<>{}]/g
    const replacedText = title.replace(illegal, '')
    const changePath = async () => {
        setLoading(true)
        await push(`${id}/${category.toString()}/${replacedText}`)
        setLoading(false)
    }

    return (
        <a onClick={changePath}>
            {loading ? (
                <GlobalLoading/>
            ) : (
                <Cards>
                    <div className="image__box">
                        <Image alt="image" src={src} width={400} height={300}/>
                    </div>
                    <div className="category__wrapper">
                        <Categories category={category} date={date}/>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Author job={job} person={person} src={avatar}/>
                </Cards>
            )}
        </a>
    )
}

export const Cards = styled.div`
    position: relative;
    max-width: 360px;
  min-height: 500px;
  width: 100%;
  border-radius: 12px;
  margin: 60px 30px 60px 0;
  transition: 250ms ease-in-out;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid rgba(226, 223, 223, 0.41);

  @media (max-width: 800px) {
    margin: 60px 0 60px 0;
  }

  &:hover {
    box-shadow: 0 0 10px white;
    cursor: pointer;
  }

  .image__box {
    position: relative;
    width: 100%;
    height: 100%;

        img {
            border-radius: 12px 12px 0 0;
        }
    }

    .category__wrapper {
        margin: 20px 0 11px 0;
    }
`

export default Card
