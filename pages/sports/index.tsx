import {API_URL} from "../../api.config";
import {ArticlesDataResponse} from "../../types";
import {ArticlesCategory} from "../../Components/common/ArticlesCategory";
import {GetServerSideProps} from "next";
import qs from "qs";

const Sports = ({data}: ArticlesDataResponse) => {
    return <ArticlesCategory data={data} text='Sports'/>
}


export const getServerSideProps: GetServerSideProps = async ({query: {title}}) => {
    const query = qs.stringify({
        filters: {
            title: {
                $containsi: title,
            },
            categories: {
                $eq: 'sport',
            }
        },
        populate: '*',
    }, {
        encodeValuesOnly: true
    });
    const sports = await fetch(`${API_URL}/articles?${query}`);
    const data = await sports.json();

    return {
        props: {
            data: data.data,
        },
    }
}

export default Sports