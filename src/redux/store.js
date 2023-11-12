import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./slices/restaurantsSlice";
import fruitsSlice from "./slices/fruitsSlice";
import mealsSlice from "./slices/mealsSlice";
import deliciousMealsSlice from "./slices/deliciousMealsSlice";
import mealsCategoriesSlice from "./slices/mealsCategoriesSlice";
import vegetablesSlice from "./slices/vegetablesSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice,
    fruits: fruitsSlice,
    vegetables: vegetablesSlice,
    meals: mealsSlice,
    deliciousMeals: deliciousMealsSlice,
    mealsCategories: mealsCategoriesSlice,
  },
});

export default store;
