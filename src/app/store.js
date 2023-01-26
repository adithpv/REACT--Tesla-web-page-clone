import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/cars/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
