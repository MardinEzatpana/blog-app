import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./slices/sliderSlice";
import productsReducer from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
  },
});
