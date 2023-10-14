import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./slices/restaurantsSlice";
import fruitsSlice from "./slices/fruitsSlice";
import mealsSlice from "./slices/mealsSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice,
    fruits: fruitsSlice,
    meals: mealsSlice,
  },
});

export default store;
