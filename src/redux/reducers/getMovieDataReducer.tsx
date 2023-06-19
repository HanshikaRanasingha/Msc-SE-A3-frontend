import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieData: {},
}

export const movieDataSlice = createSlice({
    name: "movieData",
    initialState,
    reducers: {
        getMovieData: (state, {payload}) => {
            state.movieData = payload;
        }
    }
});

export const { getMovieData } = movieDataSlice.actions;
export const getMovieDetails = (state) => state.getMovieData.movieData;
 
export default movieDataSlice.reducer;