import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actualProduct: {},
  data: {},
  isCartFull: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fillCart: (state, action) => {
      state.actualProduct = action.payload.actualProduct;
      state.data = action.payload.data;
      state.isCartFull = true;
    },
    emptyCart: (state) => {
      state.actualProduct = {};
      state.data = {};
      state.isCartFull = false;
    },
  },
});

export const CartAction = cartSlice.actions;

export default cartSlice.reducer;
