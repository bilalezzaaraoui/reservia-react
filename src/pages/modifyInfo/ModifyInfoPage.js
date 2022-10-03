/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getAuth,
  updateEmail,
  updatePassword,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { BsFillEyeFill } from "react-icons/bs";
import db from "../../firebase";
import { useNavigate } from "react-router-dom";
import { UserAction } from "../../store/userSlice/userSlice";

const ModifyInfoPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useRef();
  // Store
  const prenomStore = useSelector((state) => state.user.prenom);
  const nomStore = useSelector((state) => state.user.nom);
  const emailStore = useSelector((state) => state.user.email);

  // State Local
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      (prenomStore !== prenom && prenom.length >= 1) ||
      (nomStore !== nom && nom.length >= 1) ||
      (emailStore !== email && email.length >= 1) ||
      (password !== "" && password.length >= 1)
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [prenom, nom, email, password]);

  const handleShowPassword = () => {
    const input = document.getElementById("changeType");
    const svg = document.getElementById("svg-color");

    if (input.type === "password") {
      input.type = "text";
      svg.style.color = "rgb(0, 101, 252)";
    } else {
      input.type = "password";
      svg.style.color = "#3d3d3d";
    }
  };

  const handleUserDelete = async () => {
    const auth = getAuth();
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      prompt("Veuillez confirmer votre mot de passe")
    );

    const request = await reauthenticateWithCredential(
      auth.currentUser,
      credential
    );

    await deleteDoc(doc(db, "user", auth.currentUser.uid));

    await deleteUser(request.user);

    dispatch(UserAction.setInitialState());

    navigate("/");
    window.location.reload();
  };

  const updateInfo = async (e) => {
    e.preventDefault();
    const id = getAuth().currentUser.uid;
    const auth = getAuth();

    if (prenom !== prenomStore && prenom.length >= 1) {
      const prenomRef = doc(db, "user", id);

      // Set the "capital" field of the city 'DC'
      await updateDoc(prenomRef, {
        firstname: prenom,
      });

      dispatch(UserAction.setNewPrenom(prenom));

      setPrenom("");
    }

    if (nom !== nomStore && nom.length >= 1) {
      const nomRef = doc(db, "user", id);

      // Set the "capital" field of the city 'DC'
      await updateDoc(nomRef, {
        lastname: nom,
      });

      dispatch(UserAction.setNewNom(nom));

      setNom("");
    }

    if (email !== emailStore || password.length >= 1) {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        prompt("Veuillez confirmer votre mot de passe")
      );

      await reauthenticateWithCredential(auth.currentUser, credential);

      if (email.length >= 1) {
        // TODO(you): prompt the user to re-provide their sign-in credentials

        await updateEmail(auth.currentUser, email);

        dispatch(UserAction.setNewEmail(email));

        setEmail("");
      }

      if (password.length >= 1) {
        await updatePassword(auth.currentUser, password);
        setPassword("");
      }
    }

    navigate("/modifier-mes-infos-personnelles");
  };

  return (
    <Container>
      <Title>Modifier mes informations personnelles</Title>
      <form onSubmit={updateInfo} ref={form}>
        <FlexLayout>
          <div>
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={prenom}
              placeholder={prenomStore}
              onChange={(e) => {
                const value = e.target.value;

                if (value.length >= 1) {
                  setPrenom(e.target.value);
                } else {
                  setPrenom("");
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              value={nom}
              placeholder={nomStore}
              onChange={(e) => {
                const value = e.target.value;

                if (value.length >= 1) {
                  setNom(e.target.value);
                } else {
                  setNom("");
                }
              }}
            />
          </div>
        </FlexLayout>
        <FlexLayout>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder={emailStore}
              onChange={(e) => {
                const value = e.target.value;

                if (value.length >= 1) {
                  setEmail(e.target.value);
                } else {
                  setEmail("");
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <div className="input-layout">
              <input
                type="password"
                name="password"
                minLength="8"
                value={password}
                placeholder="***********"
                id="changeType"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onMouseDown={handleShowPassword}>
                <BsFillEyeFill id="svg-color" />
              </span>
            </div>
          </div>
        </FlexLayout>
        <Button
          type="submit"
          id="btn-modify-info"
          style={
            show
              ? { background: "rgb(0,101,252)", cursor: "pointer" }
              : { background: "#d1d3d3", cursor: "not-allowed" }
          }
        >
          Envoyer
        </Button>
      </form>
      <DeleteAccount onClick={handleUserDelete} id="close-account">
        Supprimer mon compte
      </DeleteAccount>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 50%;
  }

  @media (max-width: 768px) {
    form {
      width: 100%;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: #4b4c4f;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 1.5rem;
  }
`;

const FlexLayout = styled.div`
  display: flex;
  column-gap: 1rem;

  @media (max-width: 495px) {
    display: block;
  }

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: #eaebed;
    padding: 0.8rem 1rem;
    margin-top: 1rem;
    border-radius: 10px;

    @media (max-width: 495px) {
      width: 100%;
    }

    label {
      font-weight: 300;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    input {
      padding: 0.5rem 1rem 0.5rem 0.5rem;
      border-radius: 3px;
      border: none;
    }
  }

  .input-layout {
    width: 100%;
    background-color: red;
    margin: 0;
    padding: 0;
    position: relative;

    svg {
      cursor: pointer;
      position: absolute;
      right: 5px;
      top: 7px;
      color: #3d3d3d;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 0;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  color: white;
  text-align: center;
  background: #d1d3d3;
  cursor: not-allowed;
  font-weight: bold;
`;

const DeleteAccount = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem;
  color: #ed4949;
  transition: 0.3s;

  @media (max-width: 768px) {
    margin: 0 0 1rem 0;
  }

  &:hover {
    color: #c92a2f;
  }
`;

export default ModifyInfoPage;
