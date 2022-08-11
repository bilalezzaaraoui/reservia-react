import styled from "styled-components";
import { Fragment, useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../firebase";

const LoginForm = (props) => {
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
      const userCrendential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCrendential.user);
      // setUser(userCrendential.user);
    } catch (error) {
      handleError(error.message);
    }
  };

  // const setUser = (user) => {
  //   dispatch(
  //     userActions.setUserLoginDetails({
  //       name: user.displayName,
  //       email: user.email,
  //       photo: user.photoURL,
  //     })
  //   );
  // };

  return (
    <Fragment>
      <Title>Connectez-vous pour commander votre hébergement</Title>
      <Form ref={formRef} onSubmit={formConnectHandler}>
        <Border>
          <Single style={{ borderBottom: "1px solid #c9c9c9" }}>
            <input type="email" placeholder="Email" name="email" required />
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
    </Fragment>
  );
};

const Title = styled.h3`
  margin-bottom: 1rem;
`;

const Form = styled.form`
  margin: 1rem 0;

  button {
    width: 100%;
    padding: 0.8rem 0;
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
  height: 50px;

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
