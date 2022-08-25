import styled from "styled-components";
import NumberOfBuyers from "./numberOfBuyers/NumberOfBuyers";
import HoursDatePicker from "./HoursDatePicker";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CartAction } from "../../../store/cartSlice/cartSlice";
import { useNavigate } from "react-router-dom";

const Info = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [date, setDate] = useState({});
  const [people, setPeople] = useState(0);
  const [total, setTotal] = useState(0);
  const [isCartAccesible, setIsCartAccesible] = useState(false);

  const saveDateHandler = (whichDate) => {
    setDate(whichDate);
  };

  const savePeopleHandler = (howManyPeople) => {
    setPeople(howManyPeople);
  };

  useEffect(() => {
    if (
      typeof date.infoDate === "string" &&
      typeof date.infoTime === "string" &&
      people >= 1
    ) {
      const calcTotal = props.price * people;
      setTotal(calcTotal);
      setIsCartAccesible(true);
    }
  }, [date, people]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const cartData = {
      typeOfProduct: "activity",
      id: props.data.id,
      city: props.data.city,
      country: props.data.country,
      image: props.data.images[0],
      price: props.data.price,
      title: props.data.title,
      time: props.data.time,
      typeOfTime: props.data.typeOfTime,
      data: props.data,
      dateOfTheActivity: date.infoDate,
      timeOfTheActivity: date.infoTime,
      totalPrice: total,
      numberOfPeople: people,
    };
    dispatch(CartAction.fillCart(cartData));

    navigate("/panier");
  };

  return (
    <Container>
      <FirstChild>
        <h3 className="title">{props.title}</h3>
        <p className="info">
          <span>
            {props.time} {props.typeOfTime}
          </span>
        </p>
        <p className="description-1">{props.description}</p>
      </FirstChild>
      <SecondChild>
        <Box>
          <p className="title">
            <span>{props.price} € </span>/ Personne
          </p>
          <form>
            <div className="border">
              <HoursDatePicker onSaveDate={saveDateHandler} />
              <NumberOfBuyers maxClient={5} onSavePeople={savePeopleHandler} />
            </div>
            <button
              onClick={isCartAccesible ? handleFormSubmit : null}
              className="btn-rerservation"
            >
              Réserver
            </button>
          </form>
          <p className="debit">
            Aucun montant ne vous sera débité pour le moment
          </p>

          <Total>
            <span>total</span>
            <span> {total > 0 ? `${total}  €` : "..."}</span>
          </Total>
        </Box>
      </SecondChild>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const FirstChild = styled.div`
  width: 60%;
  height: 100%;
  padding: 1rem 3rem 1rem 0;

  .title,
  .info,
  .description-1 {
    margin: 1rem 0;

    @media (max-width: 430px) {
      margin: 0.7rem 0;
    }
  }

  .description-1 {
    font-weight: 300;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const SecondChild = styled.div`
  width: 40%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Box = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  margin-top: 2rem;

  @media (max-width: 430px) {
    margin-top: 0;
  }

  .title {
    font-weight: 300;
    span {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  form {
    position: relative;
    .border {
      margin: 1rem 0;
      border: 1px solid #c9c9c9;
      overflow: hidden;
      border-radius: 10px;
    }

    .btn-rerservation {
      cursor: pointer;
      display: block;
      margin: 0 auto;
      width: 90%;
      background-color: rgb(0, 101, 252);
      padding: 7px 0;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 5px;
    }
  }

  .debit {
    text-align: center;
    font-weight: 300;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;

const Total = styled.div`
  border-top: 1px solid rgb(221, 221, 221) !important;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-top: 1.5rem;

  span {
    font-weight: 500;
    font-size: 1.1rem;
    text-transform: capitalize;
  }
`;

export default Info;
