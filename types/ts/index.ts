export enum Categories {
    'sports' = 'sports',
    'luxury' = 'luxury',
    'fashion' = 'fashion',
    'all' = 'all',
}

export interface Photo {
    data: Image[]
}

export interface Image {
    id: string
    attributes: {
        alt: string
        width: number
        height: number
        formats: {
            large?: {
                mime: string
                url: string
                height: number
                width: string
            }
            small?: {
                mime: string
                url: string
                height: number
                width: string
            }
            medium?: {
                mime: string
                url: string
                height: number
                width: string
            }
            thumbnail: {
                url: string
                width: string
            }
        }
    }
}

export interface Author {
    data: {
        id: string
        attributes: {
            firstname: string
            job: string
            lastname: string
            avatar: string
        }
    }
}

export interface Data {
    data: ResponseDataType[]
    pagination: {
        page: number
        pageCount: number
        totalPages: number
    }
    page?: any
}

export interface ArticlesDataResponse {
    data: ResponseDataType[]
    text: string
}

export interface ResponseDataType {
    id: number
    attributes: {
        categories: Categories
        createdAt: string
        title: string
        description: string
        photo: Photo
        author: Author
    }
}

export interface RegisterUser {
    username: string
    firstname: string
    lastname: string
    email: string
    password: string
    avatar: string
}

export interface LogUserResponse {
    identifier: string
    password: string
}

export interface LogUserResponseData {
    email: string
    password: string
}

export interface User {
    id: string
    avatar: string
    createdAt: string
    email: string
    firstname: string
    lastname: string
    job: string
    username: string
    bio: string | null
}
