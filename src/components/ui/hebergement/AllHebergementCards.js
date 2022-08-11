import styled from "styled-components";
import CardHebergement from "./CardHebergement";

const AllHebergementCards = () => {
  return (
    <Container>
      <Title>Classement par popularité</Title>
      <ListOfActivities>
        <CardHebergement />
        <CardHebergement />
        <CardHebergement />
        <CardHebergement />
        <CardHebergement />
        <CardHebergement />
        <CardHebergement />
        <CardHebergement />
        <CardHebergement />
        <CardHebergement />
      </ListOfActivities>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-weight: 300;
`;

const ListOfActivities = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 3rem;
  row-gap: 2rem;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default AllHebergementCards;
