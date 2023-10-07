import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
  totalRestaurants: 0,
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    addRestaurant: (state, action) => {
      const newRestaurant = {
        restaurantName: action.payload.restaurant,
        restaurantFoodItems: action.payload.foodItems,
        totalFoodItems: action.payload.foodItems.length,
      };
      state.restaurants.push(newRestaurant);
      ++state.totalRestaurants;
    },
  },
});

// Action creators are generated for each case reducer function
export const restaurantsActions = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
