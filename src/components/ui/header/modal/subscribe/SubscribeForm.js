import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Fragment, useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import db, { auth } from "../../../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../../../../../store/userSlice/userSlice";
import SuccessMessage from "./SuccessMessage";

const SubscribeForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const isSubscribed = useSelector((state) => state.user.isSubscribed);

  const handleError = (error = "erreur") => {
    console.log(error);
    if (
      error ===
      "Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      setErrorMessage("Le mot de passe est trop court.");
    }

    setShowError(true);
  };

  const formSubscribeHandler = async (e) => {
    e.preventDefault();
    const prenom = formRef.current.prenom.value;
    const nom = formRef.current.nom.value;
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const data = { firstname: prenom, lastname: nom, reservation: [] };

      await setDoc(doc(db, "user", user.uid), data);

      dispatch(UserAction.showSubMessage());
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <Container>
      {!isSubscribed && (
        <Fragment>
          <Head>
            <CloseBtn onClick={closeModal}>
              <MdClose />
            </CloseBtn>
            <h1 className="title-modal-subscribe">S'inscrire</h1>
          </Head>
          <Body>
            <TitleForm className="title-modal-welcome">
              Bienvenue sur Reservia
            </TitleForm>
            <Form ref={formRef} onSubmit={formSubscribeHandler}>
              <Border>
                <Double>
                  <Half>
                    <input
                      type="text"
                      placeholder="Prénom"
                      name="prenom"
                      id="firstname-input"
                      required
                    />
                  </Half>
                  <Half>
                    <input
                      type="text"
                      placeholder="Nom"
                      id="lastname-input"
                      name="nom"
                      required
                    />
                  </Half>
                </Double>
                <Single>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email-input"
                    name="email"
                    required
                  />
                </Single>
                <Single>
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    id="password-input"
                    name="password"
                    required
                  />
                </Single>
              </Border>
              {showError && <p className="error-message">{errorMessage}</p>}

              <button type="submit" id="btn-subscribe">
                Envoyer
              </button>
            </Form>
          </Body>
        </Fragment>
      )}
      {isSubscribed && (
        <SuccessMessage closeModal={closeModal} response={isSubscribed} />
      )}
    </Container>
  );
};

const Container = styled.div`
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

  .success-message {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    .logo {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #c1e894;
      border-radius: 50px;

      svg {
        color: #00c603;
      }
    }

    p {
      font-weight: bold;
    }
  }
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

const Double = styled.div`
  display: flex;
  height: 40px;
  border-bottom: 1px solid #c9c9c9;
`;
const Half = styled.div`
  width: 50%;
  height: 100%;

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
