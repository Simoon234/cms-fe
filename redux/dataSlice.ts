import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_URL } from '../api.url.config'


interface Initial {
    data: any;
    latest: any;
    isLoading: boolean;
    isSuccess: boolean;
    isFetching: boolean;
    errorMessage: string;
    totalPages: number;
}

const initialState: Initial = {
    data: [],
    latest: {},
    isLoading: false,
    isSuccess: false,
    isFetching: false,
    errorMessage: '',
    totalPages: 0,
}

export const getData = createAsyncThunk(
    'data/getData',
    async (values: any, thunk) => {
        try {
            const res = await fetch(`${API_URL}/articles?populate=author,photo&pagination[page]=${values.page}&pagination[pageSize]=${values.itemsOnePage}`)
            const data = await res.json()
            return {
                data: data.data,
                totalPages: data.meta.pagination.pageCount,
            }
        } catch (e: any) {
            return thunk.rejectWithValue({ ...e.response.data })
        }
    },
)

export const getLatestData = createAsyncThunk(
    'data/getLatestData',
    async (values, thunk) => {
        try {
            const res = await fetch(`${API_URL}/articles?populate=photo,author&sort[createdAt]=DESC`)
            const data = await res.json()
            return {
                latest: data.data[0],
            }
        } catch (e: any) {
            return thunk.rejectWithValue({ ...e.response.data })
        }
    },
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: {
        [getData.pending.toString()]: (state) => {
            state.isLoading = true
            state.isFetching = true
        },
        [getData.fulfilled.toString()]: (state, { payload }) => {
            state.isFetching = false
            state.isSuccess = true
            state.isLoading = false
            state.data = payload
            state.totalPages = payload
        },
        [getData.rejected.toString()]: (state, { payload }) => {
            state.isFetching = false
            state.isSuccess = false
            state.isLoading = false
            state.errorMessage = payload
        },
        [getLatestData.pending.toString()]: (state) => {
            state.isLoading = true
            state.isFetching = true
        },
        [getLatestData.fulfilled.toString()]: (state, { payload }) => {
            state.isFetching = false
            state.isSuccess = true
            state.isLoading = false
            state.latest = payload
        },
        [getLatestData.rejected.toString()]: (state, { payload }) => {
            state.isFetching = false
            state.isSuccess = false
            state.isLoading = false
            state.errorMessage = payload
        },
    },
})

export default dataSlice.reducer
