import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counter-slice";
import resultReducer from "./Result/result-slice";

const store = configureStore({
  reducer: {
    counterReducer,
    resultReducer,
  },
});

export default store;
