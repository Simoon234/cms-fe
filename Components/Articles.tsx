import { NextPage } from 'next'
import Card from './common/Card'
import img1 from '../public/assets/1.jpg'
import styled from 'styled-components'


const Articles: NextPage = () => {
    return (
        <ArticlesWrapper>
            <Card src={img1}
                  id='1'
                  person='Andrew Sakjs'
                  job='UX Designer'
                  category='Sport'
                  date='May 02, 2022'
                  description='Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum.
                Nostra netus per conubia dolor.'
                  title='How to design a product that can grow itself 10x in year' />
            <Card src={img1}
                  id='2'
                  person='Andrew Sakjs'
                  job='UX Designer'
                  category='Sport'
                  date='May 02, 2022'
                  description='Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum.
                Nostra netus per conubia dolor.'
                  title='How to design a product that can grow itself 10x in year' />
            <Card src={img1}
                  id='3'
                  person='Andrew Sakjs'
                  job='UX Designer'
                  category='Sport'
                  date='May 02, 2022'
                  description='Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum.
                Nostra netus per conubia dolor.'
                  title='How to design a product that can grow itself 10x in year' />
            <Card src={img1}
                  id='4'
                  person='Andrew Sakjs'
                  job='UX Designer'
                  category='Sport'
                  date='May 02, 2022'
                  description='Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum.
                Nostra netus per conubia dolor.'
                  title='How to design a product that can grow itself 10x in year' />
            <Card src={img1}
                  id='5'
                  person='Andrew Sakjs'
                  job='UX Designer'
                  category='Sport'
                  date='May 02, 2022'
                  description='Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum.
                Nostra netus per conubia dolor.'
                  title='How to design a product that can grow itself 10x in year' />
            <Card src={img1}
                  id='6+'
                  person='Andrew Sakjs'
                  job='UX Designer'
                  category='Sport'
                  date='May 02, 2022'
                  description='Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum.
                Nostra netus per conubia dolor.'
                  title='How to design a product that can grow itself 10x in year' />
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