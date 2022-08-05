import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Layout>
        <Menu>
          <h4>À propos</h4>
          <ul>
            <li>Fonctionnement du site</li>
            <li>Condition générales de vente</li>
            <li>Données et confidentialité</li>
          </ul>
        </Menu>
        <Menu>
          <h4>Nos hébergements</h4>
          <ul>
            <li>Charte qualité</li>
            <li>Soumettre votre hôtel</li>
          </ul>
        </Menu>
        <Menu>
          <h4>Assistance</h4>
          <ul>
            <li>Centre d'aide</li>
            <li>Nous contacter</li>
          </ul>
        </Menu>
      </Layout>
    </Container>
  );
};

const Container = styled.footer`
  background-color: rgb(242, 242, 242);
  display: flex;
  justify-content: center;
`;

const Layout = styled.nav`
  width: 90%;
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    padding: 3rem 0 0.5rem;
  }
`;

const Menu = styled.div`
  h4 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 0.5rem;
      color: rgb(0, 0, 0);
      font-weight: 300;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
export default Footer;
