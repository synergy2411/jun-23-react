import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1; // Immer Lib
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    addCounter: (state, action) => {
      console.log("ACTION :", action);
      state.value += action.payload;
    },
    subtractCounter: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, addCounter, subtractCounter } =
  counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
