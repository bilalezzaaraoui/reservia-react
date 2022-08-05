import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./modalSlice/modalSlice";

const store = configureStore({
  reducer: {
    modal: ModalReducer,
  },
});

export default store;
