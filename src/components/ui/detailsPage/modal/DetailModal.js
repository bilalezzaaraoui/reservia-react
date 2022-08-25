import { Fragment } from "react";
import styled from "styled-components";
import ImageGrid from "./ImageGrid";

const DetailModal = (props) => {
  return (
    <Fragment>
      <Container>
        <ImageGrid
          images={props.images}
          closeModal={() => props.closeModal()}
        />
      </Container>
    </Fragment>
  );
};
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 200;
  overflow-x: scroll;

  @media (max-width: 768px) {
    align-items: flex-end;
  }
`;

export default DetailModal;
