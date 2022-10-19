import styled from "styled-components";
import AllHebergementCards from "../../components/ui/hebergement/AllHebergementCards";
const AllHouse = () => {
  return (
    <Container>
      <AllHebergementCards />
    </Container>
  );
};

const Container = styled.main`
  flex: 1;
  display: flex;
  background-color: red;
`;

export default AllHouse;
