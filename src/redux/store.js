import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./slices/restaurantsSlice";
import fruitsSlice from "./slices/fruitsSlice";
import mealsSlice from "./slices/mealsSlice";
import deliciousMelasSlice from "./slices/deliciousMealsSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice,
    fruits: fruitsSlice,
    meals: mealsSlice,
    deliciousMelas: deliciousMelasSlice,
  },
});

export default store;
