import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counter-slice";

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export default store;
