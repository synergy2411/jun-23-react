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
  },
});

export const { increment, decrement } = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
