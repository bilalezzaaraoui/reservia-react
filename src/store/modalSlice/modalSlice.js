import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscribe: false,
  login: false,
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSubscribeModal: (state) => {
      state.subscribe = true;
      state.isOpen = true;
    },

    closeSubscribeModal: (state) => {
      state.subscribe = false;
      state.isOpen = false;
    },

    openLoginModal: (state) => {
      state.login = true;
      state.isOpen = true;
    },

    closeLoginModal: (state) => {
      state.login = false;
      state.isOpen = false;
    },
  },
});

export const ModalAction = modalSlice.actions;

export default modalSlice.reducer;
