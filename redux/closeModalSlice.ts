import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    isModalOpen: false,
}

export const toggleModal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        closeModal: (state, {payload}) => {
            state.isModalOpen = payload;
        }
    }
})

export const {closeModal} = toggleModal.actions;