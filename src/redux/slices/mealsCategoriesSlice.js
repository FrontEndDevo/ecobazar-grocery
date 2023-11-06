import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mealsCategories: [],
  totalNumOfCategories: 0,
};
4;

export const mealsCategoriesSlice = createSlice({
  name: "mealsCategories",
  initialState,
  reducers: {
    addMealsCategories: (state, action) => {
      // The (Categories of Meals) fetched from API and are just an array.
      state.mealsCategories = [...action.payload];
      state.totalNumOfCategories = action.payload.length;
    },
  },
});

export const mealsCategoriesActions = mealsCategoriesSlice.actions;

export default mealsCategoriesSlice.reducer;
