import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../../store/modalSlice/modalSlice";
import LayoutReducer from "../../store/layoutSlice/layoutSlice";
import UserReducer from "../../store/userSlice/userSlice";
import HebergementReducer from "../../store/hebergementSlice/hebergementSlice";
import ActivitiesReducer from "../../store/activitySlice/activitySlice";
import CartReducer from "../../store/cartSlice/cartSlice";

const renderUi = (ui, options) => {
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

  const Wrapper = ({ children }) => {
    return (
      <MemoryRouter {...options}>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  };

  render(ui, { wrapper: Wrapper });
};

module.exports = renderUi;
