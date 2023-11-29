import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vegetables: [],
  totalVegetables: 0,
};

export const vegetablesSlice = createSlice({
  name: "vegetables",
  initialState,
  reducers: {
    addNewVegetable: (state, action) => {
      const newVegetables = {
        vegetablesName: action.payload.vegetablesName,
        vegetablesDetails: {
          ...action.payload.vegetablesDetails,
          price: Math.ceil(Math.random() * 50),
        },
      };
      state.vegetables.push(newVegetables);
      ++state.totalVegetables;
    },
  },
});

// Action creators are generated for each case reducer function
export const vegetablesActions = vegetablesSlice.actions;

export default vegetablesSlice.reducer;
