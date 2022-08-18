import styled from "styled-components";
import { useEffect, useReducer, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const initialState = {
  count: 0,
  adult: 1,
  kids: 0,
  baby: 0,
  animals: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "total":
      return {
        ...state,
        count: state.adult + state.kids + state.baby + state.animals,
      };
    case "incrementAdult":
      return { ...state, adult: state.adult + 1 };
    case "decrementAdult":
      return { ...state, adult: state.adult - 1 };
    case "incrementKids":
      return { ...state, kids: state.kids + 1 };
    case "decrementKids":
      return { ...state, kids: state.kids - 1 };
    case "incrementBaby":
      return { ...state, baby: state.baby + 1 };
    case "decrementBaby":
      return { ...state, baby: state.baby - 1 };
    case "incrementAnimals":
      return { ...state, animals: state.animals + 1 };
    case "decrementAnimals":
      return { ...state, animals: state.animals - 1 };
    default:
      throw new Error();
  }
}

const NumberOfBuyers = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch({ type: "total" });
    props.onSaveNumber(state.count);
  }, [state.count]);

  return (
    <Layout>
      <Number
        onClick={() => setShow(!show)}
        style={show ? { backgroundColor: "#ededed" } : null}
      >
        <div className="title-number">Voyageurs</div>
        <p className="sub-title-number">
          {state.count} {state.count > 1 ? "voyageurs" : "voyageur"}
        </p>
      </Number>
      {show && (
        <UserCounter>
          {state.count >= props.maxClient && (
            <p className="max-user-error-message">
              Le nombre de voyageurs est limité à {props.maxClient}
            </p>
          )}
          <div className="layout-user">
            <div className="info">
              <span className="type">Adultes</span>
              <span className="age">13 ans et plus</span>
            </div>
            <div className="counter">
              <div
                className="circle"
                style={
                  state.count <= 1
                    ? { border: "1px solid grey", cursor: "auto" }
                    : { border: "1px solid black" }
                }
                onClick={() => {
                  if (state.count > 1 && state.adult >= 1) {
                    dispatch({ type: "decrementAdult" });
                    dispatch({ type: "total" });
                  }
                }}
              >
                <FaMinus
                  style={
                    state.count <= 1
                      ? { color: "grey", cursor: "auto" }
                      : { color: "black" }
                  }
                />
              </div>
              <span>{state.adult}</span>
              <div
                className="circle"
                style={
                  state.count < props.maxClient
                    ? { border: "1px solid black" }
                    : { border: "1px solid grey", cursor: "auto" }
                }
                onClick={() => {
                  if (state.count < props.maxClient) {
                    dispatch({ type: "incrementAdult" });
                    dispatch({ type: "total" });
                  }
                }}
              >
                <FaPlus
                  style={
                    state.count < props.maxClient
                      ? { color: "black" }
                      : { color: "grey", cursor: "auto" }
                  }
                />
              </div>
            </div>
          </div>
          <div className="layout-user">
            <div className="info">
              <span className="type">Enfants</span>
              <span className="age">De 2 à 12 ans</span>
            </div>
            <div className="counter">
              <div
                className="circle"
                style={
                  state.count <= 1
                    ? { border: "1px solid grey", cursor: "auto" }
                    : { border: "1px solid black" }
                }
                onClick={() => {
                  if (state.count > 1 && state.kids >= 1) {
                    dispatch({ type: "decrementKids" });
                    dispatch({ type: "total" });
                  }
                }}
              >
                <FaMinus
                  style={
                    state.count <= 1
                      ? { color: "grey", cursor: "auto" }
                      : { color: "black" }
                  }
                />
              </div>
              <span>{state.kids}</span>
              <div
                className="circle"
                style={
                  state.count < props.maxClient
                    ? { border: "1px solid black" }
                    : { border: "1px solid grey", cursor: "auto" }
                }
                onClick={() => {
                  if (state.count < props.maxClient) {
                    dispatch({ type: "incrementKids" });
                    dispatch({ type: "total" });
                  }
                }}
              >
                <FaPlus
                  style={
                    state.count < props.maxClient
                      ? { color: "black" }
                      : { color: "grey", cursor: "auto" }
                  }
                />
              </div>
            </div>
          </div>{" "}
          <div className="layout-user">
            <div className="info">
              <span className="type">Bébés</span>
              <span className="age">- de 2 ans</span>
            </div>
            <div className="counter">
              <div
                className="circle"
                style={
                  state.count <= 1
                    ? { border: "1px solid grey", cursor: "auto" }
                    : { border: "1px solid black" }
                }
                onClick={() => {
                  if (state.count > 1 && state.baby >= 1) {
                    dispatch({ type: "decrementBaby" });
                    dispatch({ type: "total" });
                  }
                }}
              >
                <FaMinus
                  style={
                    state.count <= 1
                      ? { color: "grey", cursor: "auto" }
                      : { color: "black" }
                  }
                />
              </div>
              <span>{state.baby}</span>
              <div
                className="circle"
                style={
                  state.count < props.maxClient
                    ? { border: "1px solid black" }
                    : { border: "1px solid grey", cursor: "auto" }
                }
                onClick={() => {
                  if (state.count < props.maxClient) {
                    dispatch({ type: "incrementBaby" });
                    dispatch({ type: "total" });
                  }
                }}
              >
                <FaPlus
                  style={
                    state.count < props.maxClient
                      ? { color: "black" }
                      : { color: "grey", cursor: "auto" }
                  }
                />
              </div>
            </div>
          </div>
          <div className="layout-user">
            <div className="info">
              <span className="type">
                Animaux <br /> de compagnie
              </span>
              <span className="age"></span>
            </div>
            <div className="counter">
              <div
                className="circle"
                style={
                  state.count <= 1
                    ? { border: "1px solid grey", cursor: "auto" }
                    : { border: "1px solid black" }
                }
                onClick={() => {
                  if (state.count > 1 && state.animals >= 1) {
                    dispatch({ type: "decrementAnimals" });
                    dispatch({ type: "total" });
                  }
                }}
              >
                <FaMinus
                  style={
                    state.count <= 1
                      ? { color: "grey", cursor: "auto" }
                      : { color: "black" }
                  }
                />
              </div>
              <span>{state.animals}</span>
              <div
                className="circle"
                style={
                  state.count < props.maxClient
                    ? { border: "1px solid black" }
                    : { border: "1px solid grey", cursor: "auto" }
                }
                onClick={() => {
                  if (state.count < props.maxClient) {
                    dispatch({ type: "incrementAnimals" });
                    dispatch({ type: "total" });
                  }
                }}
              >
                <FaPlus
                  style={
                    state.count < props.maxClient
                      ? { color: "black" }
                      : { color: "grey", cursor: "auto" }
                  }
                />
              </div>
            </div>
          </div>
        </UserCounter>
      )}
    </Layout>
  );
};
const Layout = styled.div``;

const Number = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;

  .title-number {
    font-size: 0.8rem;
    font-weight: bold;
  }

  .sub-title-number {
    font-size: 0.9rem;
  }
`;

const UserCounter = styled.div`
  z-index: 200;
  position: absolute;
  top: 90px;
  border: 1px solid #c9c9c9;
  overflow: hidden;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background-color: white;
  width: 100%;

  .max-user-error-message {
    color: #f93e3e;
    font-size: 0.9rem;
  }

  .layout-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0;

    .info {
      display: flex;
      flex-direction: column;

      .type {
        font-weight: bold;
        margin-bottom: 0.2rem;
      }
      .age {
        letter-spacing: 0px;
        font-weight: 300;
        font-size: 0.9rem;
      }
    }

    .counter {
      display: flex;
      align-items: center;
      column-gap: 1rem;

      .circle {
        cursor: pointer;
        width: 35px;
        height: 35px;

        border-radius: 50px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          font-size: 0.8rem;
        }
      }
    }

    @media (max-width: 768px) {
      margin: 1rem 0;
    }
  }
`;

export default NumberOfBuyers;
