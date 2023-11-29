import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits: [],
  totalFruits: 0,
};

export const fruitsSlice = createSlice({
  name: "fruits",
  initialState,
  reducers: {
    addNewFruit: (state, action) => {
      const newFruit = {
        fruitName: action.payload.fruitName,
        fruitDetails: {
          ...action.payload.fruitDetails,
          price: Math.ceil(Math.random() * 50),
        },
      };
      state.fruits.push(newFruit);
      ++state.totalFruits;
    },
  },
});

// Action creators are generated for each case reducer function
export const fruitsActions = fruitsSlice.actions;

export default fruitsSlice.reducer;
