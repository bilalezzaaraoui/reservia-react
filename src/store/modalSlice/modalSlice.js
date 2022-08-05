import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscribe: false,
  login: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSubscribeModal: (state) => {
      state.subscribe = true;
    },

    closeSubscribeModal: (state) => {
      state.subscribe = false;
    },

    openLoginModal: (state) => {
      state.login = true;
    },

    closeLoginModal: (state) => {
      state.login = false;
    },
  },
});

export const ModalAction = modalSlice.actions;

export default modalSlice.reducer;
