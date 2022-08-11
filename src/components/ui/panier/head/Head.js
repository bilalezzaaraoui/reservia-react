import styled from "styled-components";
import logo from "../../../../assets/image/logo/Reservia.svg";

const Head = () => {
  return (
    <Container>
      <Img src={logo} alt="logo" />
    </Container>
  );
};

const Container = styled.div`
  height: 80px !important;
  padding: 0 3rem;
  box-shadow: rgb(235 235 235) 0px 1px 0px !important;
  display: flex;
  align-items: center;
`;

const Img = styled.img``;

export default Head;
