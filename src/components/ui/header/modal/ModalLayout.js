import { Fragment } from "react";
import LoginForm from "./login/LoginForm";
import SubscribeForm from "./subscribe/SubscribeForm";
import OverlaySubscribe from "./subscribe/OverlaySubscribe";
import OverlayLogin from "./login/OverlayLogin";

const ModalLayout = (props) => {
  if (props.type === "login") {
    return (
      <Fragment>
        <OverlayLogin>
          <LoginForm closeModal={() => props.closeModal()} />
        </OverlayLogin>
      </Fragment>
    );
  } else if (props.type === "subscribe") {
    return (
      <Fragment>
        <OverlaySubscribe>
          <SubscribeForm closeModal={() => props.closeModal()} />
        </OverlaySubscribe>
      </Fragment>
    );
  }
};

export default ModalLayout;
