import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";

const store = configureStore({
  reducer: {
    globalData: globalReducer,
  },
});

export default store;
