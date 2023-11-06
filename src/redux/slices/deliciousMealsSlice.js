import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deliciousMeals: [],
  totalNumOfDeliciousMeals: 0,
};
4;

export const deliciousMealsSlice = createSlice({
  name: "deliciousMeals",
  initialState,
  reducers: {
    addDeliciousMeals: (state, action) => {
      // The (Delicious Meals) fetched from API is just an array.
      state.deliciousMeals = [...action.payload];
      state.totalNumOfDeliciousMeals = action.payload.length;
    },
  },
});

export const deliciousMealsActions = deliciousMealsSlice.actions;

export default deliciousMealsSlice.reducer;
