import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    job: '',
    avatar: '',
}

export const authorSlice = createSlice({
    name: 'author',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            state.job = action.payload
            state.name = action.payload
            state.avatar = action.payload
        },
    },
})

export const { saveUser } = authorSlice.actions