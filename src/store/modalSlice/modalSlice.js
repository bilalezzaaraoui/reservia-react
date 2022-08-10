import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscribe: false,
  login: false,
  isOpen: false,
  detail: false,
  detailSlider: false,
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

    openDetailModal: (state) => {
      state.detail = true;
    },

    closeDetailModal: (state) => {
      state.detail = false;
    },

    openSliderModal: (state) => {
      state.detailSlider = true;
    },

    closeSliderModal: (state) => {
      state.detailSlider = false;
    },
  },
});

export const ModalAction = modalSlice.actions;

export default modalSlice.reducer;
