import styled from 'styled-components'
import Image from 'next/image'
import img from '../public/assets/mockImg2.jpg'
import { Avatar } from '@mui/material'

export const HomeLp = () => {
    return (
        <Home>
            <Image width={1200} height={600} src={img} />
            <div className='content__box'>
                <div className='content__box-top'>
                    <span className='category'>category</span>
                    <span className='dot'>-</span>
                    <span>Jul 2, 2021</span>
                </div>
                <div className='content__box-mid'>
                    <h3>Understanding color theory: the color wheel and finding complementary colors</h3>
                    <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                        exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                </div>
                <div className='content__box-bottom'>
                    <Avatar className='avatar' />
                    <div className='content__box-bottom-info'>
                        <p>Leslie Alexander</p>
                        <small>UI Designer</small>
                    </div>
                </div>
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

    .content__box-top {
      color: #f29f09;

      .category {
        text-transform: uppercase;
        margin-right: 12px;
      }

      .dot {
        margin-right: 12px;
        font-size: 18px;
      }
    }


    .content__box-mid {
      h3 {
        width: 339px;
        font-size: 24px;
        line-height: 38px;
        margin-bottom: 10px;
      }

      p {
        width: 283px;
        line-height: 32px;
        font-size: 18px;
      }
    }

    .content__box-bottom {
      margin-top: 30px;
      display: flex;
      align-items: center;

      .avatar {
        margin-right: 16px;
      }

      .content__box-bottom-info {
        
        small {
          color: #f29f09;
        }
      }
    }
  }
`

export default HomeLp