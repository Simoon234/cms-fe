import styled from 'styled-components'
import {Wrapper} from '../pages/404'
import {UseScrollAndSearch} from "../hooks/useScrollAndSearch";
import NorthIcon from '@mui/icons-material/North';

interface Search {
    textSearch: string;
}

export const NotFoundLookingSearch = ({textSearch}: Search) => {
    const {executeScroll} = UseScrollAndSearch()

    return (
        <Wrapper>
            <h2>Search: {textSearch}</h2>
            <MiddleText>
                <h1>No result!</h1>
                <p>{`We couldn’t find any posts with the keyword (${textSearch}). Please try another keyword.`}</p>
            </MiddleText>
            <NorthIcon className='icon' onClick={() => executeScroll()}>Click me</NorthIcon>
        </Wrapper>
    )
}

export const MiddleText = styled.div`
  text-align: center;
  margin-top: 100px;

  h1 {
    font-size: 64px;
    color: ${props => props.theme.colors.mainFontColor}
  }

  p {
    font-size: 20px;
    line-height: 30px;
    margin-top: 10px;
  }
`