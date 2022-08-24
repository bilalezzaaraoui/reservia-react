import styled from "styled-components";
import Search from "../../components/ui/homepage/search/Search";
import Hebergement from "../../components/ui/homepage/hebergement/Hebergement";
import Activity from "../../components/ui/homepage/activity/Activity";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Container>
      <Search />
      <Hebergement />
      <Activity />
    </Container>
  );
};

const Container = styled.main`
  flex: 1;
`;

export default Home;
