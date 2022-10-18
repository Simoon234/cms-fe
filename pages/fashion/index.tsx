import {API_URL} from "../../api.config";
import {ArticlesDataResponse} from "../../types";
import {ArticlesCategory} from "../../Components/common/ArticlesCategory";
import {GetServerSideProps} from "next";
import qs from 'qs';

const Fashion = ({data, text}: ArticlesDataResponse) => {
    return <ArticlesCategory text='Fashion' data={data}/>
}


export const getServerSideProps: GetServerSideProps = async ({query: {title}}) => {
    const query = qs.stringify({
        filters: {
            title: {
                $containsi: title,
            },
            categories: {
                $eq: 'fashion',
            }
        },
        populate: '*',
    }, {
        encodeValuesOnly: true
    });
    const fashion = await fetch(`${API_URL}/articles?${query}`);
    const data = await fashion.json();

    return {
        props: {
            data: data.data,
        },
    }
}

export default Fashion