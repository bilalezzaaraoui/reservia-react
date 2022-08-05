import styled from "styled-components";
import AllActivitiesCards from "../../components/ui/activités/AllActivitiesCards";

const AllActivities = () => {
  return (
    <Container>
      <AllActivitiesCards />
    </Container>
  );
};

const Container = styled.main`
  flex: 1;
  margin: 2rem 0;
`;

export default AllActivities;
