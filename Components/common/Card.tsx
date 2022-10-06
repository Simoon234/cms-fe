import styled from 'styled-components'
import Image, { StaticImageData } from 'next/image'
import Categories from './Categories'
import Author from './Author'

interface Card {
    src: StaticImageData;
    category: string;
    date: string;
    title: string;
    description: string;
    job: string;
    person: string;
}

const Card = ({ src, category, date, description, title, job, person }: Card) => {
    return (

        <Cards>
            <Image src={src} />
            <div className='category__wrapper'>
                <Categories category={category} date={date} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Author job={job} person={person} />
        </Cards>
    )
}

export const Cards = styled.div`

  max-width: 340px;
  min-height: 506px;
  width: 100%;
  border-radius: 12px;
  margin: 60px 30px 60px 0;

  img {
    border-radius: 12px 12px 0 0;
  }

  .category__wrapper {
    margin: 20px 0 11px 0;
  }


`

export default Card