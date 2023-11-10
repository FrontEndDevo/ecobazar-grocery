import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./slices/restaurantsSlice";
import fruitsSlice from "./slices/fruitsSlice";
import mealsSlice from "./slices/mealsSlice";
import deliciousMealsSlice from "./slices/deliciousMealsSlice";
import mealsCategoriesSlice from "./slices/mealsCategoriesSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice,
    fruits: fruitsSlice,
    meals: mealsSlice,
    deliciousMeals: deliciousMealsSlice,
    mealsCategories: mealsCategoriesSlice,
  },
});

export default store;
