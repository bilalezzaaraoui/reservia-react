import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    renderSmall: (state) => {
      state.layout = true;
    },
    renderBig: (state) => {
      state.layout = false;
    },
  },
});

export const LayoutAction = layoutSlice.actions;

export default layoutSlice.reducer;
