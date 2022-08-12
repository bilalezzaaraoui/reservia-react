import styled from "styled-components";
import NumberOfBuyers from "../form/numberOfBuyers/NumberOfBuyers";
import DatePickerComps from "../form/dataPicker/DatePickerComps";
import { useState } from "react";

const Info = (props) => {
  const [nbDays, setNbDays] = useState(0);

  const saveDateHandler = (numberOfNight) => {
    const result = numberOfNight;
    if (result >= 1) {
      setNbDays(result);
    } else {
      setNbDays(0);
    }
  };

  return (
    <Container>
      <FirstChild>
        <h3 className="title">{props.logement}</h3>
        <p className="info">
          <span>{props.maxClient} voyageurs</span> -{" "}
          <span>{props.maxBedroom} chambres</span> -{" "}
          <span>{props.maxBed} lits</span> -{" "}
          <span>{props.maxRestroom} salle de bain</span>
        </p>
        <p className="description-1">{props.description1}</p>
        <p className="description-1">{props.description2}</p>
      </FirstChild>
      <SecondChild>
        <Box>
          <p className="title">
            <span>{props.price} €</span> nuit
          </p>
          <form>
            <div className="border">
              <DatePickerComps onSaveDaysNumber={saveDateHandler} />
              <NumberOfBuyers maxClient={props.maxClient} />
            </div>
            <button type="submit">Réserver</button>
          </form>
          <p className="debit">
            Aucun montant ne vous sera débité pour le moment
          </p>
          <Price>
            <span className="price-underline">
              {nbDays <= 0 && "Logement"}
              {nbDays > 0 &&
                `${props.price}€ x ${
                  nbDays <= 1 ? `${nbDays} nuit` : `${nbDays} nuits`
                }`}
            </span>
            <span className="price-not-underline">
              {nbDays > 0 ? `${props.price * nbDays}` : "0"} €
            </span>
          </Price>
          <Price>
            <span className="price-underline">Frais de service</span>
            <span className="price-not-underline">
              {nbDays > 0 ? `${nbDays * props.service}` : "0"} €
            </span>
          </Price>
          <Total>
            <span>total</span>
            <span>
              {" "}
              {nbDays > 0
                ? `${props.price * nbDays + nbDays * props.service}`
                : "0"}{" "}
              €
            </span>
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

    button {
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

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;

  .price-underline {
    text-decoration: underline;
    font-weight: 300;
  }

  .price-not-underline {
    font-weight: 300;
  }
`;

const Total = styled.div`
  border-top: 1px solid rgb(221, 221, 221) !important;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  span {
    font-weight: 500;
    font-size: 1.1rem;
    text-transform: capitalize;
  }
`;

export default Info;
