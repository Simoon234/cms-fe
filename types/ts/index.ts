export enum Categories {
    'sports' = 'sports',
    'luxury' = 'luxury',
    'fashion' = 'fashion',
    'all' = 'all'
}

export interface Photo {
    data: Image[];
}

export interface Image {
    id: string;
    attributes: {
        alt: string;
        width: number;
        height: number;
        formats: {
            thumbnail: {
                mime: string;
                url: string;
            }
        }
    }
}

export interface Author {
    data: {
        id: string;
        attributes: {
            name: string;
            job: string;
            surname: string;
        }
    }
}

export interface Data {
    data: ResponseDataType[]
}

export interface ResponseDataType {
    id: number;
    attributes: {
        categories: Categories,
        createdAt: string;
        title: string;
        description: string;
        photo: Photo;
        author: Author;
    }
}
