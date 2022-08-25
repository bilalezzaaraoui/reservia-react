import styled from "styled-components";
import Head from "../../components/ui/panier/head/Head";
import ShoppingCart from "../../components/ui/panier/shoppingCart/ShoppingCart";

const Panier = () => {
  return (
    <Container>
      <Head />
      <ShoppingCart />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export default Panier;
