import {configureStore} from '@reduxjs/toolkit'
import dataSlice from '../dataSlice'
import {authorSlice} from '../authorSlice'
import {searchSlice} from "../searchSlice";
import userSlice from "../userSlice";
import {toggleModal} from "../closeModalSlice";

export const store = configureStore({
    reducer: {
        data: dataSlice,
        author: authorSlice.reducer,
        searchText: searchSlice.reducer,
        user: userSlice,
        modal: toggleModal.reducer
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>