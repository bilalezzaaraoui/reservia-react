import styled from "styled-components";
import Search from "../../components/ui/homepage/search/Search";
import Hebergement from "../../components/ui/homepage/hebergement/Hebergement";
import Activity from "../../components/ui/homepage/activity/Activity";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
