import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./Slice/CountSlice";
export const store = configureStore({
  reducer: {
    count:CountSlice
  },
});
