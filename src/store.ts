import { configureStore } from "@reduxjs/toolkit";
import searchTermReducer from "./redux/reducers/movieReducer";
import getMoviesReducer from "./redux/reducers/getMoviesReduce";
import getPaginationPageReducer from "./redux/reducers/paginationReducer";
import getMovieDataReducer from "./redux/reducers/getMovieDataReducer";

export const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        getMovies: getMoviesReducer,
        currentPage: getPaginationPageReducer,
        getMovieData: getMovieDataReducer
    },
});