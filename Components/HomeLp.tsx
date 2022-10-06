import styled from 'styled-components'
import Image from 'next/image'
import img from '../public/assets/mockImg2.jpg'
import Categories from './common/Categories'
import Author from './common/Author'

export const HomeLp = () => {
    return (
        <Home>
            <Image width={1200} height={600} src={img} />
            <div className='content__box'>
                <Categories category='SPORT' date='Jul 2, 2022' />
                <div className='content__box-mid'>
                    <h3>Understanding color theory: the color wheel and finding complementary colors</h3>
                    <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                        exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                </div>
                <Author job='UI Designer' person='Leslie Alexander' />
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