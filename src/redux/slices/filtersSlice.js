import { createSlice } from "@reduxjs/toolkit";

const initialFiltersState = {
  letters: [],
  areas: [],
  categories: [],
  priceRange: {
    min: 0,
    max: 200,
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
    setMinPrice(state, action) {
      state.priceRange = {
        ...state.priceRange,
        min: action.payload,
      };
    },
    setMaxPrice(state, action) {
      state.priceRange = {
        ...state.priceRange,
        max: action.payload,
      };
    },

    resetFilters(state) {
      state.letters = [];
      state.areas = [];
      state.categories = [];
      state.priceRange = {
        min: 0,
        max: 200,
      };
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice.reducer;
