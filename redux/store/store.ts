import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../dataSlice'
import { authorSlice } from '../authorSlice'

export const store = configureStore({
    reducer: {
        data: dataSlice,
        author: authorSlice.reducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>