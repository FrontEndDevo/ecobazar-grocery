import { createSlice } from "@reduxjs/toolkit";

const initialResults = {
  totalResults: 0,
};

export const resultsSlice = createSlice({
  name: "results",
  initialState: initialResults,
  reducers: {
    addResults(state, action) {
      state.totalResults += action.payload;
    },

    resetResults(state) {
      state.totalResults = 0;
    },
  },
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice.reducer;
