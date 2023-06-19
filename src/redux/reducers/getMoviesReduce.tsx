import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
}

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        getMovies: (state, {payload}) => {
            state.movies = payload;
        }
    }
});

export const { getMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.getMovies.movies;
 
export default moviesSlice.reducer;