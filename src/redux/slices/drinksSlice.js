import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allDrinks: [],
  totalDrinksTypes: 0,
  totalNumOfDrinks: 0,
};
4;

export const drinksSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    addNewDrinkType: (state, action) => {
      const filteredDrinkType = state.allDrinks.filter(
        (type) => type.letter == action.payload.letter
      );

      // Check if the drinks array stored before or not.
      if (filteredDrinkType.length == 0) {
        // Add (price) property to each drink then create a newDrink obj.
        const drinksWithPrice = action.payload.drinks.map((drink) => {
          return { ...drink, price: Math.ceil(Math.random() * 100) };
        });

        const newDrink = {
          letter: action.payload.letter,
          drinks: drinksWithPrice,
        };
        state.allDrinks.push(newDrink);

        state.totalDrinksTypes++;
        state.totalNumOfDrinks += action.payload.drinks.length;
      }
    },
  },
});

export const drinksActions = drinksSlice.actions;

export default drinksSlice.reducer;
