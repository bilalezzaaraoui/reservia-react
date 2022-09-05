import styled from "styled-components";
import { Link } from "react-router-dom";

const Erreur = () => {
  return (
    <Container>
      <Title className="error-message">Erreur 404</Title>
      <Message>Vous êtes perdu</Message>
      <Link to="/">Retourner à la page d'accueil</Link>
    </Container>
  );
};

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    background-color: rgb(0, 101, 252);
    padding: 10px 15px;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    transition: 0.3s;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const Title = styled.h1`
  color: rgb(0, 101, 252);
  margin-bottom: 0.5rem;
`;

const Message = styled.p`
  color: rgb(0, 101, 252);
  margin-bottom: 0.5rem;
`;

export default Erreur;
