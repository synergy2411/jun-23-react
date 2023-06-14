import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    storeResult: (state, action) => {
      state.result.push(action.payload);
    },
    deleteResult: (state, action) => {
      state.result.splice(action.payload, 1);
    },
  },
});

export const { storeResult, deleteResult } = resultSlice.actions;

const resultReducer = resultSlice.reducer;

export default resultReducer;
