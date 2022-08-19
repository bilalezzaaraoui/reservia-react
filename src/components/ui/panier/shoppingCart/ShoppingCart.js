import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import LoginForm from "./loginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../../../../store/cartSlice/cartSlice";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.data);
  const isCertifiedConnected = useSelector(
    (state) => state.user.isCertifiedConnected
  );

  const ResetCart = () => {
    dispatch(CartAction.emptyCart());
    navigate(
      `${
        cart.typeOfProduct === "activity"
          ? `/activity/${cart.id}`
          : `/accommodation/${cart.id}`
      }`
    );
  };

  if (cart.typeOfProduct === "activity") {
    return (
      <Layout>
        <Container>
          <Head>
            <div className="circle" onClick={ResetCart}>
              <FaChevronLeft />
            </div>
            <h1>Demande de réservation</h1>
          </Head>
          <Cart>
            <CartOne>
              <h3>
                Votre {`${cart.typeOfProduct === "activity" ? "Activité" : ""}`}
              </h3>
              <div className="info-layout">
                <div className="info">
                  <span className="title">Dates</span>
                  <span className="sub-title">{`${cart.dateOfTheActivity} - ${cart.timeOfTheActivity}`}</span>
                </div>
                <div className="info">
                  <span className="title">Participants</span>
                  <span className="sub-title">
                    {`${cart.numberOfPeople} ${`${
                      cart.numberOfPeople >= 2 ? "participants" : "participant"
                    }`}`}
                  </span>
                </div>
              </div>
              <div
                className="login-form"
                style={
                  !isCertifiedConnected
                    ? {
                        borderTop: "1px solid rgb(235 235 235)",
                        padding: "1rem 0",
                      }
                    : null
                }
              >
                {!isCertifiedConnected && <LoginForm />}
              </div>
              <div className="connexion">
                <Button>Payer</Button>
              </div>
            </CartOne>
            <CartTwo>
              <LayoutDiv>
                <Description>
                  <div className="image-layout">
                    <img src={cart.image} alt="logo" />
                  </div>
                  <div className="description-hebergement">
                    <span className="high">{cart.city}</span>
                    <span className="low">{cart.title}</span>
                  </div>
                </Description>
                <Price>
                  <h3>Détails du prix</h3>
                  <div className="info-layout">
                    <div className="info">
                      <span className="title-first">Prix/Personne</span>
                      <span className="sub-title">{`${cart.price} €`}</span>
                    </div>
                    <div className="info">
                      <span className="title-first">Temps de l'activité</span>
                      <span className="sub-title">{`${cart.time} ${cart.typeOfTime}`}</span>
                    </div>
                    <div className="info">
                      <span className="title-second">{`${
                        cart.numberOfPeople >= 2
                          ? "Participants"
                          : "Participant"
                      }`}</span>

                      <span className="sub-title">
                        {`${cart.numberOfPeople}`}
                      </span>
                    </div>
                  </div>
                  <TotalAmount>
                    <span className="total-layout">Total</span>
                    <span className="total-amount">
                      {`${cart.totalPrice}`} €
                    </span>
                  </TotalAmount>
                </Price>
              </LayoutDiv>
            </CartTwo>
          </Cart>
        </Container>
      </Layout>
    );
  } else if (cart.typeOfProduct === "hebergement") {
    console.log(isCertifiedConnected);
    return (
      <Layout>
        <Container>
          <Head>
            <div className="circle" onClick={ResetCart}>
              <FaChevronLeft />
            </div>
            <h1>Demande de réservation</h1>
          </Head>
          <Cart>
            <CartOne>
              <h3>
                Votre{" "}
                {`${cart.typeOfProduct === "hebergement" ? "hébergement" : ""}`}
              </h3>
              <div className="info-layout">
                <div className="info">
                  <span className="title">Dates</span>
                  <span className="sub-title">{`${cart.enterDate} - ${cart.outDate}`}</span>
                </div>
                <div className="info">
                  <span className="title">Voyageurs</span>
                  <span className="sub-title">
                    {`${cart.numberOfPeople} ${`${
                      cart.numberOfPeople >= 2 ? "voyageurs" : "voyageur"
                    }`}`}
                  </span>
                </div>
              </div>
              <div className="login-form">
                {!isCertifiedConnected && <LoginForm />}
              </div>
              <div className="connexion">
                <Button>Payer</Button>
              </div>
            </CartOne>
            <CartTwo>
              <LayoutDiv>
                <Description>
                  <div className="image-layout">
                    <img src={cart.image} alt="logo" />
                  </div>
                  <div className="description-hebergement">
                    <span className="high">{cart.city}</span>
                    <span className="low">{cart.title}</span>
                  </div>
                </Description>
                <Price>
                  <h3>Détails du prix</h3>
                  <div className="info-layout">
                    <div className="info">
                      <span className="title-first">Prix/Nuit</span>
                      <span className="sub-title">{`${cart.pricePerNight} €`}</span>
                    </div>
                    <div className="info">
                      <span className="title-first">Nombre de nuit</span>
                      <span className="sub-title">{`${cart.numberOfDays}`}</span>
                    </div>
                    <div className="info">
                      <span className="title-second">{`${
                        cart.numberOfPeople >= 2 ? "Voyageurs" : "Voyageur"
                      }`}</span>

                      <span className="sub-title">
                        {`${cart.numberOfPeople}`}
                      </span>
                    </div>
                  </div>
                  <TotalAmount>
                    <span className="total-layout">Total</span>
                    <span className="total-amount">{`${cart.total}`} €</span>
                  </TotalAmount>
                </Price>
              </LayoutDiv>
            </CartTwo>
          </Cart>
        </Container>
      </Layout>
    );
  } else {
    return;
  }
};

const Layout = styled.div`
  flex: 1;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Head = styled.div`
  padding: 3rem 0 2rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  .circle {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    &:hover {
      background-color: #cecece;
    }
  }

  h1 {
    font-weight: 400;
  }
`;

const Cart = styled.div`
  display: flex;
  column-gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    row-gap: 2rem;
  }
`;

const CartOne = styled.div`
  width: 50%;
  padding-left: 1rem;

  h3 {
    font-weight: 500;
    font-size: 1.2rem;
  }

  .info-layout {
    padding: 1rem 0;

    .info {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      .title {
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .sub-title {
        font-weight: 300;
      }
    }
  }

  .connexion {
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem 0;
  border: none;
  border-radius: 10px;
  color: white;
  background: #d1d3d3;
  font-weight: bold;
  cursor: not-allowed;
`;

const CartTwo = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LayoutDiv = styled.div`
  padding: 2rem;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
`;

const Description = styled.div`
  display: flex;
  column-gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgb(235 235 235);

  .image-layout {
    width: 140px;
    height: 100px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    img {
      object-fit: cover;
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .description-hebergement {
    display: flex;
    flex-direction: column;

    .high {
      font-size: 0.8rem;
      color: rgb(113, 113, 113);
      font-weight: 300;
      margin-bottom: 0.3rem;
    }

    .low {
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
`;

const Price = styled.div`
  h3 {
    margin: 1.5rem 0;
    font-weight: 600;
  }

  .info-layout {
    border-bottom: 1px solid rgb(235 235 235);

    .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      .title-first,
      .title-second {
        font-weight: 300;
      }

      .title-second {
        text-decoration: underline;
      }

      .sub-title {
        font-weight: 300;
      }
    }
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  .total-layout {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .total-amount {
    font-weight: 300;
  }
`;

export default ShoppingCart;
