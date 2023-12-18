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
      state.letters = [...state.letters, action.payload.letter];
    },
    setAreas(state, action) {
      state.areas = [...state.areas, action.payload.area];
    },
    setCategories(state, action) {
      state.categories = [...state.categories, action.payload.category];
    },
    setPriceRange(state, action) {
      state.priceRange = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice.reducer;
