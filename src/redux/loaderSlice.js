import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        loading: false,
    },
    reducers: {
        showLoader: (state, action) => {
            state.loading = action.payload
        },
    }
})

export const { showLoader } = loaderSlice.actions