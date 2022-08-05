import styled from "styled-components";

const OverlaySubscribe = (props) => {
  return <Container onClick={props.closeModal}></Container>;
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default OverlaySubscribe;
