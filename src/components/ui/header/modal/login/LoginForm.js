import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../firebase";
import { useDispatch } from "react-redux";
import { UserAction } from "../../../../../store/userSlice/userSlice";
import { ModalAction } from "../../../../../store/modalSlice/modalSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (error = "erreur") => {
    console.log(error);
    if (error === "Firebase: Error (auth/wrong-password).") {
      setErrorMessage("Le mot de passe est incorrect.");
    }

    if (error === "Firebase: Error (auth/user-not-found).") {
      setErrorMessage("L'utilisateur n'existe pas.");
    }

    setShowError(true);
  };

  const formConnectHandler = async (e) => {
    e.preventDefault();
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (typeof user.accessToken === "string") {
        dispatch(UserAction.userIsConnected());
        dispatch(ModalAction.closeLoginModal());
        navigate("/");
      }
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <Container>
      <Head>
        <CloseBtn onClick={props.closeModal}>
          <MdClose />
        </CloseBtn>
        <h1 className="title-modal-login">Se connecter</h1>
      </Head>
      <Body>
        <h3 className="title-modal-welcome">Bienvenue sur Reservia</h3>
        <Form ref={formRef} onSubmit={formConnectHandler}>
          <Border>
            <Single>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email-login"
                required
              />
            </Single>
            <Single>
              <input
                type="password"
                placeholder="Mot de passe"
                id="email-password"
                name="password"
                required
              />
            </Single>
          </Border>
          {showError && <p className="error-message">{errorMessage}</p>}
          <button type="submit" id="btn-login-submit">
            Continuer
          </button>
        </Form>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 30vw;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.8) 2px 4px 8px 0px;
  z-index: 800;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 768px) {
    bottom: 0;
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

  .error-message {
    color: red;
    margin-bottom: 1rem;
  }
`;

const Border = styled.div`
  border: 1px solid #c9c9c9;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 1rem;
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
export default LoginForm;
