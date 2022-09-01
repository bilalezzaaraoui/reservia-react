import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  isCartFull: false,
  orderSuccesful: false,
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
    orderPageOpen: (state) => {
      state.orderSuccesful = true;
    },
    orderPageClosed: (state) => {
      state.orderSuccesful = false;
    },
  },
});

export const CartAction = cartSlice.actions;

export default cartSlice.reducer;
