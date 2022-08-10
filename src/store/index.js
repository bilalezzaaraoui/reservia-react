import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./modalSlice/modalSlice";
import LayoutReducer from "./layoutSlice/layoutSlice";
import UserReducer from "./userSlice/userSlice";

const store = configureStore({
  reducer: {
    modal: ModalReducer,
    isLayoutBig: LayoutReducer,
    user: UserReducer,
  },
});

export default store;
