import { Avatar } from '@mui/material'
import styled from 'styled-components'

interface Avatar {
    person: string;
    job: string;
    src?: string;
}

const Author = ({ job, person, src }: Avatar) => {
    return (
        <Av>
            <Avatar src={src} className='avatar' />
            <div className='content__box-bottom-info'>
                <p>{person}</p>
                <small>{job}</small>
            </div>
        </Av>
    )
}

export const Av = styled.div`

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
`

export default Author