import {configureStore} from '@reduxjs/toolkit'
import dataSlice from '../dataSlice'
import {authorSlice} from '../authorSlice'
import {searchSlice} from "../searchSlice";
import userSlice from "../userSlice";

export const store = configureStore({
    reducer: {
        data: dataSlice,
        author: authorSlice.reducer,
        searchText: searchSlice.reducer,
        user: userSlice
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>