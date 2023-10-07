import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./slices/restaurantsSlice";
import fruitsSlice from "./slices/fruitsSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice,
    fruits: fruitsSlice,
  },
});

export default store;
