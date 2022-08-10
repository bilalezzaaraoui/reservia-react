import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSubscribed: false,
  isConnected: false,
  id: null,
  prenom: false,
  nom: false,
  email: null,
  bookings: {},
};

const userSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showSubMessage: (state) => {
      state.isSubscribed = true;
    },
    hideSubMessage: (state) => {
      state.isSubscribed = false;
    },
  },
});

export const UserAction = userSlice.actions;

export default userSlice.reducer;
