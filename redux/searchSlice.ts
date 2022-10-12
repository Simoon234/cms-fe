import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchText: ''
}

export const searchSlice = createSlice({
    name: 'searchText',
    initialState,
    reducers: {
        getText: (state, {payload}) => {
            state.searchText = payload;
        }
    }
})

export const {getText} = searchSlice.actions;