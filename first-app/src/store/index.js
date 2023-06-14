import { MiddlewareArray, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counter-slice";
import resultReducer from "./Result/result-slice";

// const logger = (state) => (next) => (action) => {
//   console.log("Middleware works");
//   console.log("STATE : ", state);
//   console.log("ACTION : ", action);
//   setTimeout(() => {
//     next(action);
//   }, 1500);
// };

const store = configureStore({
  reducer: {
    counterReducer,
    resultReducer,
  },
  // middleware: new MiddlewareArray().concat(logger),
});

export default store;
