import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { UserAction } from "../../../../../store/userSlice/userSlice";
import { useTimer } from "react-timer-hook";
import { useNavigate } from "react-router-dom";

const SuccessMessage = ({ closeModal, response }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 10); // 10 seconds timer

  const { seconds } = useTimer({
    expiryTimestamp,
    autoStart: response,
    onExpire: () => {
      handleModal();
      navigate("/");
    },
  });

  const handleModal = () => {
    closeModal();
    dispatch(UserAction.hideSubMessage());
  };

  return (
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
        <div
          className="success-message"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="logo">
            <FaCheck />
          </div>
          <p style={{ marginTop: "1rem" }}>
            Votre inscription à été prise en compte
          </p>
          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            Vous allez être rediriger vers la page d'accueil dans{" "}
            <span>{seconds}</span>s.{" "}
          </p>
        </div>
      </Body>
    </Fragment>
  );
};

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

export default SuccessMessage;
