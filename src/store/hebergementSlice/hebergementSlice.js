import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const hebergementSlice = createSlice({
  name: "hebergement",
  initialState,
  reducers: {
    createHebergement: (state, action) => {
      state.data = action.payload;
    },
    deleteAllHebergement: (state) => {
      state.data = [];
    },
  },
});

export const HebergementAction = hebergementSlice.actions;

export default hebergementSlice.reducer;
