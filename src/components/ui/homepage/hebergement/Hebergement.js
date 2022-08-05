import { Link } from "react-router-dom";
import styled from "styled-components";
import StarsList from "./starsList/StarsList";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaChild,
  FaHeart,
  FaDog,
} from "react-icons/fa";

const Hebergement = () => {
  return (
    <Container>
      <WhiteBloc>
        <h3 className="title">Hébergements à Marseille</h3>
        <ul className="list">
          <WhiteBlocCard>
            <Link to="/">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/reservia-c4dd4.appspot.com/o/1.jpg?alt=media&token=17c88a59-1d53-43a7-9c41-65e65a7c6c88')",
                }}
              ></div>
              <div className="card-info">
                <h4>Auberge la Cannebière</h4>
                <p>Marseille</p>
                <p>
                  Nuit à partir de <span>25€</span>
                </p>
                <div className="list-flex">
                  <ul className="icon">
                    <div>
                      <FaMoneyBillWave />
                    </div>
                    <div>
                      <FaChild />
                    </div>
                    <div>
                      <FaHeart />
                    </div>
                    <div>
                      <FaDog />
                    </div>
                  </ul>
                  <ul className="stars-list-dev">
                    <StarsList number="5" />
                  </ul>
                </div>
              </div>
            </Link>
          </WhiteBlocCard>{" "}
          <WhiteBlocCard>
            <Link to="/">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/reservia-c4dd4.appspot.com/o/1.jpg?alt=media&token=17c88a59-1d53-43a7-9c41-65e65a7c6c88')",
                }}
              ></div>
              <div className="card-info">
                <h4>Auberge la Cannebière</h4>
                <p>Marseille</p>
                <p>
                  Nuit à partir de <span>25€</span>
                </p>
                <div className="list-flex">
                  <ul className="icon">
                    <div>
                      <FaMoneyBillWave />
                    </div>
                    <div>
                      <FaChild />
                    </div>
                    <div>
                      <FaHeart />
                    </div>
                    <div>
                      <FaDog />
                    </div>
                  </ul>
                  <ul className="stars-list-dev">
                    <StarsList number="5" />
                  </ul>
                </div>
              </div>
            </Link>
          </WhiteBlocCard>{" "}
          <WhiteBlocCard>
            <Link to="/">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/reservia-c4dd4.appspot.com/o/1.jpg?alt=media&token=17c88a59-1d53-43a7-9c41-65e65a7c6c88')",
                }}
              ></div>
              <div className="card-info">
                <h4>Auberge la Cannebière</h4>
                <p>Marseille</p>
                <p>
                  Nuit à partir de <span>25€</span>
                </p>
                <div className="list-flex">
                  <ul className="icon">
                    <div>
                      <FaMoneyBillWave />
                    </div>
                    <div>
                      <FaChild />
                    </div>
                    <div>
                      <FaHeart />
                    </div>
                    <div>
                      <FaDog />
                    </div>
                  </ul>
                  <ul className="stars-list-dev">
                    <StarsList number="5" />
                  </ul>
                </div>
              </div>
            </Link>
          </WhiteBlocCard>{" "}
          <WhiteBlocCard>
            <Link to="/">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/reservia-c4dd4.appspot.com/o/1.jpg?alt=media&token=17c88a59-1d53-43a7-9c41-65e65a7c6c88')",
                }}
              ></div>
              <div className="card-info">
                <h4>Auberge la Cannebière</h4>
                <p>Marseille</p>
                <p>
                  Nuit à partir de <span>25€</span>
                </p>
                <div className="list-flex">
                  <ul className="icon">
                    <div>
                      <FaMoneyBillWave />
                    </div>
                    <div>
                      <FaChild />
                    </div>
                    <div>
                      <FaHeart />
                    </div>
                    <div>
                      <FaDog />
                    </div>
                  </ul>
                  <ul className="stars-list-dev">
                    <StarsList number="5" />
                  </ul>
                </div>
              </div>
            </Link>
          </WhiteBlocCard>{" "}
          <WhiteBlocCard>
            <Link to="/">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/reservia-c4dd4.appspot.com/o/1.jpg?alt=media&token=17c88a59-1d53-43a7-9c41-65e65a7c6c88')",
                }}
              ></div>
              <div className="card-info">
                <h4>Auberge la Cannebière</h4>
                <p>Marseille</p>
                <p>
                  Nuit à partir de <span>25€</span>
                </p>
                <div className="list-flex">
                  <ul className="icon">
                    <div>
                      <FaMoneyBillWave />
                    </div>
                    <div>
                      <FaChild />
                    </div>
                    <div>
                      <FaHeart />
                    </div>
                    <div>
                      <FaDog />
                    </div>
                  </ul>
                  <ul className="stars-list-dev">
                    <StarsList number="5" />
                  </ul>
                </div>
              </div>
            </Link>
          </WhiteBlocCard>{" "}
          <WhiteBlocCard>
            <Link to="/">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/reservia-c4dd4.appspot.com/o/1.jpg?alt=media&token=17c88a59-1d53-43a7-9c41-65e65a7c6c88')",
                }}
              ></div>
              <div className="card-info">
                <h4>Auberge la Cannebière</h4>
                <p>Marseille</p>
                <p>
                  Nuit à partir de <span>25€</span>
                </p>
                <div className="list-flex">
                  <ul className="icon">
                    <div>
                      <FaMoneyBillWave />
                    </div>
                    <div>
                      <FaChild />
                    </div>
                    <div>
                      <FaHeart />
                    </div>
                    <div>
                      <FaDog />
                    </div>
                  </ul>
                  <ul className="stars-list-dev">
                    <StarsList number="5" />
                  </ul>
                </div>
              </div>
            </Link>
          </WhiteBlocCard>
        </ul>
      </WhiteBloc>
      <GreyBloc>
        <div className="title">
          <h3>Les plus populaires</h3>
          <FaChartLine />
        </div>
        <ul className="card-list">
          <GreyBlocCard>
            <Link to="/">
              <div className="flex-layout">
                <div
                  className="card-img"
                  style={{
                    backgroundImage:
                      "url('https://firebasestorage.googleapis.com/v0/b/reservia-c4dd4.appspot.com/o/1-loisir.jpg?alt=media&token=3348fbbd-b11b-417e-a01b-3f760442ce74')",
                  }}
                ></div>
                <div className="card-info">
                  <h4>Auberge la Cannebière</h4>
                  <p>Marseille</p>
                  <p>
                    Nuit à partir de <span>25€</span>
                  </p>
                  <div className="list-layout">
                    <ul className="icon">
                      <div>
                        <FaMoneyBillWave />
                      </div>
                      <div>
                        <FaChild />
                      </div>
                      <div>
                        <FaHeart />
                      </div>
                      <div>
                        <FaDog />
                      </div>
                    </ul>
                    <ul className="stars">
                      <StarsList number="5" />
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </GreyBlocCard>
          <GreyBlocCard>
            <Link to="/">
              <div className="flex-layout">
                <div
                  className="card-img"
                  style={{
                    backgroundImage:
                      "url('https://firebasestorage.googleapis.com/v0/b/reservia-c4dd4.appspot.com/o/1-loisir.jpg?alt=media&token=3348fbbd-b11b-417e-a01b-3f760442ce74')",
                  }}
                ></div>
                <div className="card-info">
                  <h4>Auberge la Cannebière</h4>
                  <p>Marseille</p>
                  <p>
                    Nuit à partir de <span>25€</span>
                  </p>
                  <div className="list-layout">
                    <ul className="icon">
                      <div>
                        <FaMoneyBillWave />
                      </div>
                      <div>
                        <FaChild />
                      </div>
                      <div>
                        <FaHeart />
                      </div>
                      <div>
                        <FaDog />
                      </div>
                    </ul>
                    <ul className="stars">
                      <StarsList number="5" />
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </GreyBlocCard>{" "}
          <GreyBlocCard>
            <Link to="/">
              <div className="flex-layout">
                <div
                  className="card-img"
                  style={{
                    backgroundImage:
                      "url('https://firebasestorage.googleapis.com/v0/b/reservia-c4dd4.appspot.com/o/1-loisir.jpg?alt=media&token=3348fbbd-b11b-417e-a01b-3f760442ce74')",
                  }}
                ></div>
                <div className="card-info">
                  <h4>Auberge la Cannebière</h4>
                  <p>Marseille</p>
                  <p>
                    Nuit à partir de <span>25€</span>
                  </p>
                  <div className="list-layout">
                    <ul className="icon">
                      <div>
                        <FaMoneyBillWave />
                      </div>
                      <div>
                        <FaChild />
                      </div>
                      <div>
                        <FaHeart />
                      </div>
                      <div>
                        <FaDog />
                      </div>
                    </ul>
                    <ul className="stars">
                      <StarsList number="5" />
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </GreyBlocCard>
        </ul>
      </GreyBloc>
    </Container>
  );
};

const Container = styled.section`
  width: 90%;
  margin: 0 auto 2rem;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  column-gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
    width: 100%;
  }
`;

const WhiteBloc = styled.div`
  grid-column: 1 / span 11;
  background-color: rgb(242, 242, 242);
  border-radius: 15px;
  padding: 2rem 1.5rem;

  .title {
    font-size: 1rem;
    margin: 0 0 1rem 0.2rem;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 2rem;

    @media (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      row-gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    background-color: transparent;
    padding: 2rem 1.5rem 1rem;
  }
`;

const WhiteBlocCard = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px,
    rgba(0, 0, 0, 0.19) 0px 6px 6px 0px;
  padding: 0.3rem;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  .card-img {
    height: 120px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      height: 120px;
    }
  }

  .card-info {
    padding: 0.4rem 0.4rem 0.2rem;

    h4 {
      font-size: 0.9rem;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.8rem;
      margin-bottom: 5px;

      span {
        font-weight: bold;
      }
    }

    .list-flex {
      display: flex;
      justify-content: space-between;
      margin-top: 8px 0;
      .icon {
        margin-bottom: 0.5rem;
        display: flex;

        div {
          background-color: rgb(222, 235, 255);
          margin-right: 5px;
          padding: 3px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            color: rgb(0, 101, 252);
            font-size: 0.8rem;
          }
        }
      }

      svg {
        font-size: 0.8rem;
      }

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
`;

const GreyBloc = styled.div`
  grid-column: 12 / span 5;
  background-color: rgb(242, 242, 242);
  border-radius: 15px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 1rem;

      @media (max-width: 768px) {
        margin-bottom: 1rem;
      }
    }
  }

  .card-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    padding-top: 1.5rem;
  }

  @media (max-width: 768px) {
    border-radius: 0;
    margin-bottom: 2rem;
  }
`;

const GreyBlocCard = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px,
    rgba(0, 0, 0, 0.19) 0px 6px 6px 0px;
  border-radius: 15px;
  transition: 0.3s;
  margin-bottom: 1.5rem;

  &:hover {
    transform: translateY(-5px);
  }

  a {
    display: block;
    width: 100%;

    .flex-layout {
      width: 100%;
      display: flex;

      .card-img {
        min-width: 130px;
        height: 130px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;

        @media (max-width: 1280px) {
          width: 100%;
          height: 100px;
          border-radius: 0;
        }

        @media (max-width: 768px) {
          width: 30%;
          height: auto;
        }
      }

      .card-info {
        flex: 1;
        padding: 0.5rem 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        h4 {
          font-size: 0.9rem;
        }

        p {
          font-size: 0.8rem;
          /* margin-bottom: 0.5rem; */

          span {
            font-weight: bold;
          }
        }

        .list-layout {
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          .icon {
            /* margin-bottom: 0.5rem; */
            display: flex;

            div {
              background-color: rgb(222, 235, 255);
              margin-right: 5px;
              padding: 5px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;

              svg {
                color: rgb(0, 101, 252);
                font-size: 0.8rem;
              }
            }
          }

          .stars {
            svg {
              margin-right: 2px;
              font-size: 0.8rem;
            }
          }
        }

        @media (max-width: 768px) {
          padding: 0.5rem 0 0.5rem 0.5rem;
        }

        @media (max-width: 1280px) {
          h4 {
            margin-bottom: 2px;
          }

          p {
            margin-bottom: 2px;
          }
        }
      }

      @media (max-width: 1280px) {
        display: block;
      }

      @media (max-width: 768px) {
        display: flex;
      }
    }
  }

  @media (max-width: 1280px) {
    padding: 0;
    overflow: hidden;
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;
export default Hebergement;
