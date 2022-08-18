import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  isCartFull: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fillCart: (state, action) => {
      state.data = action.payload;
      state.isCartFull = true;
    },
    emptyCart: (state) => {
      state.data = {};
      state.isCartFull = false;
    },
  },
});

export const CartAction = cartSlice.actions;

export default cartSlice.reducer;
