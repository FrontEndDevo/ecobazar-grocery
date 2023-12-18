import { createSlice } from "@reduxjs/toolkit";

const initialFiltersState = {
  letters: [],
  areas: [],
  categories: [],
  priceRange: {
    min: 0,
    max: 0,
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFiltersState,
  reducers: {
    setLetters(state, action) {
      state.letters = action.payload;
    },
    setAreas(state, action) {
      state.areas = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setPriceRange(state, action) {
      state.priceRange = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice.reducer;
