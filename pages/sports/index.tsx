import {API_URL} from "../../api.config";
import {Data} from "../../types";
import {ArticlesCategory} from "../../Components/common/ArticlesCategory";
import {GetStaticProps} from "next";

const Sports = ({data, pagination, page}: Data) => {
    return <ArticlesCategory data={data} pagination={pagination} page={page}/>
}


export const getStaticProps: GetStaticProps = async () => {
    const sports = await fetch(`${API_URL}/articles?filters[categories][$eq]=sport&populate=photo,author`);
    const data = await sports.json();

    return {
        props: {
            data: data.data,
            pagination: data.meta.pagination,
        },
    }
}

export default Sports