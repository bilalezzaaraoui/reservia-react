import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../../assets/image/logo/Reservia.svg";

const Head = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  padding: 0.5rem 3rem;
  box-shadow: rgb(235 235 235) 0px 1px 0px !important;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem 3rem;
  }

  a {
    cursor: pointer;
  }
`;

export default Head;
