import { Fragment } from "react";
import styled from "styled-components";
import LoginForm from "./login/LoginForm";
import SubscribeForm from "./subscribe/SubscribeForm";
import OverlaySubscribe from "./subscribe/OverlaySubscribe";
import OverlayLogin from "./login/OverlayLogin";

const ModalLayout = (props) => {
  if (props.type === "login") {
    return (
      <Fragment>
        <Container>
          <OverlayLogin closeModal={() => props.closeModal()} />
          <LoginForm closeModal={() => props.closeModal()} />
        </Container>
      </Fragment>
    );
  } else if (props.type === "subscribe") {
    return (
      <Fragment>
        <Container>
          <OverlaySubscribe closeModal={() => props.closeModal()} />
          <SubscribeForm closeModal={() => props.closeModal()} />
        </Container>
      </Fragment>
    );
  }
};
const Container = styled.div`
  z-index: 200;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-end;
  }
`;

export default ModalLayout;
