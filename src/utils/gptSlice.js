import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch : false
  },
  reducers: {
    toggleSearchView: (state) => {
        state.showGptSearch = !state.showGptSearch;
    }
  },
});

export const { toggleSearchView }= gptSlice.actions;

export default gptSlice.reducer;
