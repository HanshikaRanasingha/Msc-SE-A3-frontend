import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paginationPage: 1,
}

export const paginationPageSlice = createSlice({
    name: "paginationPage",
    initialState,
    reducers: {
        getPaginationPageValue: (state, { payload }) => {
            state.paginationPage = payload
        }
    }
});

export const { getPaginationPageValue } = paginationPageSlice.actions;
export const getPaginationPage = (state) => state.currentPage.paginationPage;
export default paginationPageSlice.reducer;