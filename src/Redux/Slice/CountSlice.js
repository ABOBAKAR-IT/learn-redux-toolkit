import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counteSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counteSlice.actions;
export default counteSlice.reducer;
