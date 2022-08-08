import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./modalSlice/modalSlice";
import LayoutReducer from "./layoutSlice/layoutSlice";

const store = configureStore({
  reducer: {
    modal: ModalReducer,
    isLayoutBig: LayoutReducer,
  },
});

export default store;
