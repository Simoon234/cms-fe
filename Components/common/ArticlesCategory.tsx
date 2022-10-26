import {ArticlesWrapper} from "../Articles";
import Card from "./Card";
import {DEFAULT_URL} from "../../api.config";
import {ArticlesDataResponse} from "../../types";
import styled from "styled-components";
import {useEffect} from "react";
import {closeModal} from "../../redux/closeModalSlice";
import {UseDispatchHook} from "../../hooks/useDispatchHook";
import {NotFoundLookingSearch} from "../NotFoundLookingSearch";
import {UseHomeRouter} from "../../hooks/useHomeRouter";

export const ArticlesCategory = ({data, text}: ArticlesDataResponse) => {
    const dispatch = UseDispatchHook();
    const {query} = UseHomeRouter();
    console.log(query)
    useEffect(() => {
        dispatch(closeModal(false))
    }, [dispatch])
    return (
        <Containers>
            <h2 id={`${text}`}>{text}</h2>
            <ArticlesWrapper>
                {data && data.map((item) =>
                    <Card id={item.id.toString()}
                          avatar={item?.attributes?.author?.data?.attributes?.avatar}
                          job={item?.attributes?.author?.data?.attributes?.job}
                          person={item?.attributes?.author?.data?.attributes?.firstname}
                          category={item?.attributes?.categories}
                          date={new Date(item?.attributes?.createdAt).toLocaleString()}
                          title={item?.attributes?.title}
                          description={item?.attributes?.description?.length > 300 ? `${item?.attributes?.description?.slice(0, 160)}...` : item?.attributes?.description}
                          src={`${DEFAULT_URL}` + item.attributes.photo.data.map((photo) => photo.attributes.formats.thumbnail.url)[0]}
                          key={item?.id}/>
                )}
                {data.length <= 0 && <NotFoundLookingSearch textSearch={query?.title as string}/>}
            </ArticlesWrapper>
        </Containers>
    )
}


export const Containers = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    color: white;
  }
`