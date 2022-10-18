import {API_URL} from "../../api.config";
import {ArticlesDataResponse} from "../../types";
import {ArticlesCategory} from "../../Components/common/ArticlesCategory";
import {GetServerSideProps} from "next";
import qs from "qs";

const Luxury = ({data}: ArticlesDataResponse) => {
    return <ArticlesCategory data={data} text='Luxury'/>
}


export const getServerSideProps: GetServerSideProps = async ({query: {title}}) => {
    const query = qs.stringify({
        filters: {
            title: {
                $containsi: title,
            },
            categories: {
                $eq: 'luxury',
            }
        },
        populate: '*',
    }, {
        encodeValuesOnly: true
    });
    const luxury = await fetch(`${API_URL}/articles?${query}`);
    const data = await luxury.json();

    return {
        props: {
            data: data.data,
        },
    }
}

export default Luxury