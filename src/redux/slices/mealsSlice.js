import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMeals: [],
  totalMealsTypes: 0,
  totalNumOfMeals: 0,
};
4;

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    addNewMealType: (state, action) => {
      const filteredMealType = state.allMeals.filter(
        (type) => type.letter == action.payload.letter
      );

      // Check if the meals array stored before or not.
      if (filteredMealType.length == 0) {
        // Add (price) property to each meal then create a newMeal obj.
        const mealsWithPrice = action.payload.meals.map((meal) => {
          return { ...meal, price: Math.ceil(Math.random() * 200) };
        });

        const newMeal = {
          letter: action.payload.letter,
          meals: mealsWithPrice,
        };
        state.allMeals.push(newMeal);

        state.totalMealsTypes++;
        state.totalNumOfMeals += action.payload.meals.length;
      }
    },
  },
});

export const mealsActions = mealsSlice.actions;

export default mealsSlice.reducer;
