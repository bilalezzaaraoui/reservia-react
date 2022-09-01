import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { CartAction } from "../../store/cartSlice/cartSlice";
import { useTimer } from "react-timer-hook";
import { useNavigate } from "react-router-dom";

const OrderSuccesfull = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 15); // 15 seconds timer

  const { seconds } = useTimer({
    expiryTimestamp,
    autoStart: true,
    onExpire: () => {
      navigate("/mes-reservation");
    },
  });

  useEffect(() => {
    dispatch(CartAction.emptyCart());
  }, []);

  return (
    <Container>
      <SuccessMessage>
        <div className="logo">
          <FaCheck />
        </div>
        <p style={{ marginTop: "1rem" }}>
          Votre inscription à été prise en compte
        </p>
        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          Vous allez être rediriger vers la page d'accueil dans{" "}
          <span>{seconds}s</span>
        </p>
      </SuccessMessage>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    padding: 20px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c1e894;
    border-radius: 50px;

    svg {
      color: #00c603;
      font-size: 2rem;
    }
  }

  p {
    font-weight: bold;

    span {
      color: #0164fc;
    }
  }
`;

export default OrderSuccesfull;
