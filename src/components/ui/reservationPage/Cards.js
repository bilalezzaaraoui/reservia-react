/* eslint-disable array-callback-return */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";
import db from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../../../store/userSlice/userSlice";
const euroDate = require("../../../utils/function/euroDate");

const Cards = ({ item, userId }) => {
  const reservation = useSelector((state) => state.user.reservation);
  const dispatch = useDispatch();

  const deleteCard = async () => {
    const docRef = doc(db, "user", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      const targetData = userData.reservation.filter((element) => {
        if (
          item.enterDate === element.enterDate &&
          item.outDate === element.outDate &&
          item.id === element.id &&
          item.total === element.total &&
          item.numberOfDays === element.numberOfDays
        ) {
          return element;
        }
      })[0];

      if (typeof targetData !== "undefined") {
        await updateDoc(docRef, {
          reservation: arrayRemove(targetData),
        });
        const findObj = (element) => {
          if (
            item.enterDate === element.enterDate &&
            item.outDate === element.outDate &&
            item.id === element.id &&
            item.total === element.total &&
            item.numberOfDays === element.numberOfDays
          ) {
            return element;
          }
        };
        const indexNumber = await reservation.findIndex(findObj);
        if (typeof indexNumber === "number") {
          let arr = [...reservation];
          arr.splice(indexNumber, 1);
          dispatch(UserAction.deleteOneReservation(arr));
        }
      }
    } else {
      console.log("No such document!");
    }
  };

  if (item.typeOfProduct === "activity") {
    return (
      <Container>
        <Link
          to={`/${
            item.typeOfProduct === "hebergement" ? "accommodation" : "activity"
          }/${item.id}`}
          className="link-direct"
        >
          <div className="img">
            <img src={item.image} alt="img de l'achat" />
          </div>
        </Link>
        <Info>
          <h3>{item.title}</h3>
          <p className="date">{`${euroDate(
            item.dateOfTheActivity
          )}-${item.timeOfTheActivity.split(":").join("h")}`}</p>

          <p className="info-resa">
            Nombre de participants: {item.numberOfPeople}
          </p>
          <p className="info-resa">Total: {item.totalPrice}€</p>
        </Info>
        {<button onClick={() => deleteCard()}>Annuler ma réservation</button>}
      </Container>
    );
  }
  if (item.typeOfProduct === "hebergement") {
    return (
      <Container>
        <Link
          to={`/${
            item.typeOfProduct === "hebergement" ? "accommodation" : "activity"
          }/${item.id}`}
          className="link-direct"
        >
          <div className="img">
            <img src={item.image} alt="img de l'achat" />
          </div>
        </Link>
        <Info>
          <h3>{item.title}</h3>
          <p className="date">{`${euroDate(item.enterDate)}-${euroDate(
            item.outDate
          )}`}</p>
          <p className="info-resa">
            Nombre de voyageurs: {item.numberOfPeople}
          </p>
          <p className="info-resa">Nombre de nuits: {item.numberOfDays}</p>
          <p className="info-resa">Total: {item.total}€</p>
        </Info>
        <button onClick={() => deleteCard()}>Annuler ma réservation</button>
      </Container>
    );
  }
};

const Container = styled.div`
  margin: 1rem auto 0;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  button {
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    height: auto;
    align-self: center;
    transition: 0.3s;
    cursor: pointer;

    @media (max-width: 768px) {
      align-self: flex-start;
      padding: 0.8rem 1rem;
    }

    &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transform: translateY(-2px);
    }
  }

  .link-direct {
    width: 20%;
    height: 100%;
    position: relative;

    @media (max-width: 768px) {
      width: 50%;
    }

    .img {
      width: 100%;
      height: 130px;
      overflow: hidden;
      display: flex;
      align-items: center;
      border-radius: 3px;
      position: relative;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }
`;

const Info = styled.div`
  flex: 1;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0;
    margin: 1rem 0;
  }

  h3 {
    font-weight: 300;
  }

  .date {
    color: grey;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .info-resa {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

export default Cards;
