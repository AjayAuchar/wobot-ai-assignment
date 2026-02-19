import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "globalData",
  initialState: {
    camerasData: [],
    displayedData: [],
  },
  reducers: {
    setCamerasData: (state, action) => {
      state.camerasData = action.payload;
    },
    setDisplayedData: (state, action) => {
      state.displayedData = action.payload;
    },
  },
});

export const { setCamerasData, setDisplayedData } = globalSlice.actions;
export default globalSlice.reducer;
