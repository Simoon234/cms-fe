import styled from 'styled-components'
import Image from 'next/image'
import Categories from './Categories'
import Author from './Author'
import Link from 'next/link'
import {UseHomeRouter} from "../../hooks/useHomeRouter";
import { useState } from 'react'
import {GlobalLoading} from "./GlobalLoading";

interface Card {
    id: string;
    src: any;
    category: string;
    date: string;
    title: string;
    description: string;
    job: string;
    person: string;
    width: number;
    height: number;
    avatar: string;
}

const Card = ({ src, category, date, description, title, job, person, avatar, id, width, height }: Card) => {
    const {push} = UseHomeRouter();
    const [loading, setLoading] = useState(false);
    const changePath = async () => {
        setLoading(true);
        await push(`${id}/${category}/${title}`);
        setLoading(false);
    }
    return (
        <a onClick={changePath}>
            {loading ? <GlobalLoading/> :  <Cards>
                <Image alt='image' src={src} width={width} height={height} />
                <div className='category__wrapper'>
                    <Categories category={category} date={date} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Author job={job} person={person} src={avatar} />
            </Cards>}

        </a>
    )
}

export const Cards = styled.div`
  position: relative;
  max-width: 340px;
  min-height: 506px;
  width: 100%;
  border-radius: 12px;
  margin: 60px 30px 60px 0;
  transition: 250ms ease-in-out;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 10px white;
    cursor: pointer;
  }

  img {
    border-radius: 12px 12px 0 0;
  }

  .category__wrapper {
    margin: 20px 0 11px 0;
  }


`

export default Card