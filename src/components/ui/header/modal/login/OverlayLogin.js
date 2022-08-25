import styled from "styled-components";

const OverlayLogin = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-end;
  }
`;
export default OverlayLogin;
