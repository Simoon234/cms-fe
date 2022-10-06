import styled from 'styled-components'

interface Category {
    category: string;
    date: string;
}

const Categories = ({ category, date }: Category) => {
    return (
        <CategoriesStyle>
            <span className='category'>{category}</span>
            <span className='dot'>-</span>
            <span>{date}</span>
        </CategoriesStyle>
    )
}

export const CategoriesStyle = styled.div`
  color: #f29f09;

  .category {
    text-transform: uppercase;
    margin-right: 12px;
  }

  .dot {
    margin-right: 12px;
    font-size: 18px;
  }
`

export default Categories