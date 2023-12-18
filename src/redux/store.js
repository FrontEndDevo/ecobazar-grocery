import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./slices/restaurantsSlice";
import fruitsSlice from "./slices/fruitsSlice";
import mealsSlice from "./slices/mealsSlice";
import drinksSlice from "./slices/drinksSlice";
import deliciousMealsSlice from "./slices/deliciousMealsSlice";
import mealsCategoriesSlice from "./slices/mealsCategoriesSlice";
import vegetablesSlice from "./slices/vegetablesSlice";
import errorsSlice from "./slices/errorsSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import filtersSlice from "./slices/filtersSlice";

// Prepare all slices in reducers constant:
const reducers = combineReducers({
  restaurants: restaurantsSlice,
  fruits: fruitsSlice,
  vegetables: vegetablesSlice,
  meals: mealsSlice,
  drinks: drinksSlice,
  deliciousMeals: deliciousMealsSlice,
  mealsCategories: mealsCategoriesSlice,
  errors: errorsSlice,
  filters: filtersSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
