import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieNames: null,
    gptMovieSearchResults: null,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const {movieNames, movieData} = action.payload;
      state.gptMovieNames = movieNames;
      state.gptMovieSearchResults = movieData;
    },
  },
});

export const { toggleSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
