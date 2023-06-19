import { createSlice } from "@reduxjs/toolkit";

// interface SearchItem {
//     Title?: string,
//     Poster?: string,
//     Year?: string,
//     imdbID: string,
// }

// interface Rating {
//     Source: string,
//     value: string
// }

// interface PlotDetail {
//     title: string,
//     plot: string,
//     actors: string,
//     ratings?: Rating[];
// }

// interface MovieAppState {
//     searchTerm: string,
//     searchItems: SearchItem[],
//     paginationValue: number,
//     plotDetails?: PlotDetail
// }

// const initialState = {
//     searchTerm: "",
//     searchItems: [],
//     paginationValue: 1,
//     plotDetails: {},
// }

const initialState = {
    searchTerm: "",
}

export const searchTermSlice = createSlice({
    name: "searchTerm",
    initialState,
    reducers: {
        getSearchValue: (state, { payload }) => {
            state.searchTerm = payload
        }
    }
});

export const { getSearchValue } = searchTermSlice.actions;
export const getSearch = (state) => state.searchTerm.searchTerm;
export default searchTermSlice.reducer;