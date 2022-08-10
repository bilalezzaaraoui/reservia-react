import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { Fragment, useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../../../../../store/userSlice/userSlice";

const SubscribeForm = (props) => {
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
      setErrorMessage("Le mot de passe est trop faible.");
    }

    setShowError(true);
  };

  const formSubscribeHandler = async (e) => {
    e.preventDefault();
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;

    try {
      const userCrendential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(UserAction.showSubMessage());
    } catch (error) {
      handleError(error.message);
    }
  };

  const handleModal = () => {
    props.closeModal();
    dispatch(UserAction.hideSubMessage());
  };

  return (
    <Container>
      {!isSubscribed && (
        <Fragment>
          <Head>
            <CloseBtn onClick={props.closeModal}>
              <MdClose />
            </CloseBtn>
            <h1>S'inscrire</h1>
          </Head>
          <Body>
            <TitleForm>Bienvenue sur Reservia</TitleForm>
            <Form ref={formRef} onSubmit={formSubscribeHandler}>
              <Border>
                <Double>
                  <Half>
                    <input
                      type="text"
                      placeholder="Prénom"
                      name="prenom"
                      className="first-input"
                      required
                    />
                  </Half>
                  <Half>
                    <input type="text" placeholder="Nom" name="nom" required />
                  </Half>
                </Double>
                <Single>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </Single>
                <Single>
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    name="password"
                    required
                  />
                </Single>
              </Border>
              {showError && <p className="error-message">{errorMessage}</p>}
              <button type="submit">Continuer</button>
            </Form>
          </Body>
        </Fragment>
      )}
      {isSubscribed && (
        <Fragment>
          <Head>
            <CloseBtn onClick={handleModal}>
              <MdClose />
            </CloseBtn>
            <h1>Inscription réussi</h1>
          </Head>
          <Body
            style={{
              height: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="success-message">
              <div className="logo">
                <FaCheck />
              </div>
              <p>Votre inscription à été prise en compte</p>
            </div>
          </Body>
        </Fragment>
      )}
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
