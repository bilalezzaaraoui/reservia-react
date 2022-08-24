import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSubscribed: false,
  isConnected: false,
  isCertifiedConnected: false,
  // Auth
  id: null,
  email: null,
  // Firestore
  prenom: false,
  nom: false,
  reservation: [],
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
    userIsConnected: (state) => {
      state.isConnected = true;
    },
    userIsDisconnected: (state) => {
      state.isConnected = false;
    },

    setUserLoggedIn: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.prenom = action.payload.prenom;
      state.nom = action.payload.nom;
      state.reservation = action.payload.reservation;
      state.isCertifiedConnected = true;
    },

    setUserLoggedOut: (state) => {
      state.id = null;
      state.email = null;
      state.prenom = false;
      state.nom = false;
      state.reservation = [];
      state.isCertifiedConnected = false;
    },

    setNewPrenom: (state, action) => {
      state.prenom = action.payload;
    },

    setNewNom: (state, action) => {
      state.nom = action.payload;
    },

    setNewEmail: (state, action) => {
      state.email = action.payload;
    },

    deleteOneReservation: (state, action) => {
      state.reservation = action.payload;
    },

    setInitialState: (state) => {
      state = initialState;
    },
  },
});

export const UserAction = userSlice.actions;

export default userSlice.reducer;
