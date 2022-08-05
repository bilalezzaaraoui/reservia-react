import styled from "styled-components";

const OverlayLogin = (props) => {
  return <Container onClick={props.closeModal}></Container>;
};

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default OverlayLogin;
