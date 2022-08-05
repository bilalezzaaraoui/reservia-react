import styled from "styled-components";
import { MdClose } from "react-icons/md";

const SubscribeForm = (props) => {
  return (
    <Container>
      <Head>
        <CloseBtn onClick={props.closeModal}>
          <MdClose />
        </CloseBtn>
        <h1>S'inscrire</h1>
      </Head>
      <Body>
        <TitleForm>Bienvenue sur Reservia</TitleForm>
        <Form>
          <Border>
            <Double>
              <Half>
                <input
                  type="text"
                  placeholder="Prénom"
                  name="prenom"
                  className="first-input"
                />
              </Half>
              <Half>
                <input type="text" placeholder="Nom" name="nom" />
              </Half>
            </Double>
            <Single>
              <input type="email" placeholder="Email" name="email" />
            </Single>
            <Single>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password1"
              />
            </Single>
            <Single>
              <input
                type="password"
                placeholder="Confirmer votre mot de passe"
                name="password2"
              />
            </Single>
          </Border>

          <button type="submit">Continuer</button>
        </Form>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  margin: auto;
  width: 30vw;
  box-shadow: rgba(0, 0, 0, 0.8) 2px 4px 8px 0px;
  background-color: white;
  z-index: 800;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100vw;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const Head = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 1rem 0;

  h1 {
    font-size: 1.3rem;
  }
`;
const CloseBtn = styled.div`
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.3rem;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
`;

const Body = styled.div`
  padding: 1rem 2rem;
`;
const TitleForm = styled.h3``;

const Form = styled.form`
  margin: 1rem 0;

  button {
    width: 100%;
    padding: 0.5rem 0;
    border: none;
    border-radius: 10px;
    color: white;
    background: rgb(0, 101, 252);
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.01);
    }
  }
`;

const Border = styled.div`
  border: 1px solid #c9c9c9;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const Double = styled.div`
  display: flex;
  height: 40px;
  border-bottom: 1px solid #c9c9c9;
`;
const Half = styled.div`
  width: 50%;
  height: 100%;
  background-color: red;

  .first-input {
    border-right: 1px solid #c9c9c9;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding-left: 1rem;

    &:focus {
      outline: none;
    }
  }
`;

const Single = styled.div`
  height: 40px;
  border-bottom: 1px solid #c9c9c9;

  input {
    width: 100%;
    height: 100%;
    border: none;
    padding-left: 1rem;

    &:focus {
      outline: none;
    }
  }
`;
export default SubscribeForm;
