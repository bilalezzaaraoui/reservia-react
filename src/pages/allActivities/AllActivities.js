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
  display: flex;
`;

export default AllActivities;
