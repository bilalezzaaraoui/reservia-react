import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./modalSlice/modalSlice";
import LayoutReducer from "./layoutSlice/layoutSlice";
import UserReducer from "./userSlice/userSlice";
import HebergementReducer from "./hebergementSlice/hebergementSlice";
import ActivitiesReducer from "./activitySlice/activitySlice";
import CartReducer from "./cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    modal: ModalReducer,
    isLayoutBig: LayoutReducer,
    user: UserReducer,
    hebergement: HebergementReducer,
    activities: ActivitiesReducer,
    cart: CartReducer,
  },
});

export default store;
