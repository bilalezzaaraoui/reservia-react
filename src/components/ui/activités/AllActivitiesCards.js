import styled from "styled-components";
import CardActivity from "./CardActivity";

const AllActivitiesCards = () => {
  return (
    <Container>
      <Title>20 expériences</Title>
      <ListOfActivities>
        <CardActivity />
        <CardActivity />
        <CardActivity />
        <CardActivity />
        <CardActivity />
        <CardActivity />
        <CardActivity />
        <CardActivity />
        <CardActivity />
      </ListOfActivities>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const ListOfActivities = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1.5rem;
  row-gap: 2rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default AllActivitiesCards;
