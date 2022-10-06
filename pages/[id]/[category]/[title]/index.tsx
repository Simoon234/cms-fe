import styled from 'styled-components'
import Categories from '../../../../Components/common/Categories'
import Author from '../../../../Components/common/Author'
import Image from 'next/image'
import img2 from '../../../../public/assets/mockImg2.jpg'

const SingleArticleInfoDetails = () => {
    return (
        <Details>
            <Categories category='UI Design' date='Jul 02, 2022' />
            <div className='content'>
                <h3>
                    Understanding color theory: the color wheel and finding complementary colors
                </h3>
            </div>
            <div className='author'>
                <Author job='UI Designer' person='Alexander Suwqhe' />
            </div>
            <Image src={img2} width={896} height={594} />
            <div className='description'>
                <p className='first'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur
                    blanditiis cum cumque
                    cupiditate dolor earum, fugiat id itaque magni natus nobis officiis pariatur quam quo repellendus
                    sequi suscipit totam ullam veritatis! Beatae blanditiis dolores dolorum eos eveniet impedit ipsum
                    labore repudiandae similique temporibus. Aut ducimus, incidunt? At consectetur dicta illo incidunt
                    molestias perspiciatis quae quo voluptates. Aliquid asperiores autem ex, hic illo nam nihil omnis
                    quia sit tempore. A aliquid consequatur, ducimus excepturi magni minus nulla reprehenderit. Adipisci
                    architecto beatae consequuntur cupiditate dolores dolorum est eum excepturi fuga fugit id ipsa
                    itaque iusto laudantium libero </p>

                <p>maxime minima obcaecati quam quisquam suscipit tempora voluptas
                    voluptates. Dolorum, esse exercitationem magni modi non nulla tempore! Assumenda consequatur,
                    cupiditate deleniti doloremque et laboriosam numquam obcaecati perspiciatis porro ullam? Aliquid
                    harum hic id in necessitatibus officia pariatur vel. Blanditiis delectus dolor dolores dolorum ea
                    eum facilis natus saepe. Asperiores, assumenda at cum, enim, eos impedit ipsam itaque libero nobis
                    odio quam repellat similique voluptates. Eligendi est facere inventore non obcaecati pariatur quae
                    quam repudiandae sed ullam! Cumque ipsam optio velit. Accusamus adipisci amet at blanditiis, eum,
                    eveniet laborum minima natus neque quo quod rerum sapiente sequi sunt ullam unde vel voluptatum? Ad
                    aliquam aspernatur at atque debitis dolor esse et excepturi exercitationem explicabo fugit in, ipsum
                    labore minus, molestias mollitia natus nihil officia porro qui quis repellat sint tempora velit,
                    veritatis vitae voluptas. Adipisci, aut autem, beatae esse ex, iste iure laborum maxime nesciunt
                    provident quae quisquam ratione reprehenderit vitae voluptatibus? Ad architecto asperiores
                    aspernatur at dolor fugit iusto, maxime molestias numquam placeat quasi quisquam rem repellat saepe,
                    sed sit tempora veritatis, voluptate? Asperiores aspernatur, assumenda at dicta doloremque doloribus
                    dolorum impedit ipsa ipsam magnam, molestiae necessitatibus optio pariatur qui saepe, sunt vitae
                    voluptates. Atque cum doloremque explicabo illo maiores. Accusamus ad amet beatae consequuntur culpa
                    dolore dolorem ducimus expedita fugiat fugit illo illum ipsum iste molestiae nesciunt officiis optio
                    pariatur quas, qui quia, ratione, repellendus sit ut velit veritatis? Aperiam consectetur corporis,
                    culpa harum, incidunt itaque laboriosam magni minus nemo neque optio qui sequi tempore tenetur
                    voluptatum. A ab aliquam asperiores delectus eius eos error eum, explicabo facilis harum hic illo
                    incidunt iste itaque iusto mollitia nesciunt, possimus praesentium repellat, sequi sint tempora
                    voluptates. Alias asperiores culpa dignissimos distinctio dolorem, earum eos est eveniet,
                    exercitationem illo laboriosam laborum maxime nulla officiis pariatur placeat porro quam repudiandae
                    sint sit soluta ullam unde veniam vitae!</p>
            </div>
        </Details>
    )
}

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 77px;
  text-align: center;

  .content {
    width: 526px;
    display: flex;
    align-items: center;
    margin: 0 auto;

    h3 {
      margin: 11px 0 30px 0;
      width: 100%;
    }
  }

  .author {
    margin-bottom: 28px;
  }

  .description {
    margin-top: 70px;
    text-align: left;

    .first {
      margin-bottom: 20px;
    }

    p {
      line-height: 35px;
    }
  }
`

export default SingleArticleInfoDetails