import styled from "styled-components";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaChild,
  FaHeart,
  FaDog,
  FaInfo,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    if (value.length >= 1) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  }, [value]);

  return (
    <Container>
      <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
      <p className="info-line">En plein centre ville ou en pleine nature</p>
      <SearchBar>
        <div className="marker">
          <FaMapMarkerAlt />
        </div>

        <form style={{ position: `${isModalOpen ? "static" : "relative"}` }}>
          <FormList>
            <input
              type="search"
              className="searchbar"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Marseille, France"
            />
            {showDiv && (
              <div className="search-response">
                <p>
                  <span>8</span> resultat trouvé
                </p>
              </div>
            )}
          </FormList>
        </form>
        <button type="submit">Rechercher</button>
        <button type="submit" className="responsive">
          <FaSearch />
        </button>
      </SearchBar>
      <Filter>
        <h3>Filtres</h3>
        <ul>
          <Link to="/accommodation/filter=money">
            <Tag>
              <div className="logo">
                <FaMoneyBillWave />
              </div>
              <div className="type">
                <span>Économique</span>
              </div>
            </Tag>
          </Link>
          <Link to="/accommodation/filter=family">
            <Tag>
              <div className="logo">
                <FaChild />
              </div>
              <div className="type">
                <span>Familial</span>
              </div>
            </Tag>
          </Link>
          <Link to="/accommodation/filter=love">
            <Tag>
              <div className="logo">
                <FaHeart />
              </div>
              <div className="type">
                <span>Romantique</span>
              </div>
            </Tag>
          </Link>
          <Link to="/accommodation/filter=dog">
            <Tag>
              <div className="logo">
                <FaDog />
              </div>
              <div className="type">
                <span>Animaux autorisés</span>
              </div>
            </Tag>
          </Link>
        </ul>
      </Filter>
      <Info>
        <div className="logo">
          <FaInfo />
        </div>
        <p>Plus de 500 logements sont disponibles dans cette ville</p>
      </Info>
    </Container>
  );
};

const Container = styled.section`
  width: 90%;
  margin: auto;
  padding: 2rem 0;

  h1 {
    font-size: 1rem;
  }

  .info-line {
    font-size: 0.9rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }
`;

const SearchBar = styled.div`
  width: 350px;
  margin-top: 0.8rem;
  background-color: rgb(242, 242, 242);
  /* overflow: hidden; */
  border-radius: 12px;
  display: flex;
  justify-content: space-between;

  .marker {
    width: 50px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 0.9rem;
    }
  }

  form {
    /* position: relative; */
    flex: 1;
    display: flex;
    align-items: center;
    padding: 1px 0;

    input {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      border: none;
      transition: 0.3s;

      &:focus {
        outline: none;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;
        border-radius: 3px;
      }
    }
  }

  button {
    border: none;
    padding: 0 0.6rem;
    background-color: rgb(0, 101, 252);
    color: rgb(255, 255, 255);
    font-weight: 700;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  .responsive {
    display: none;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

const FormList = styled.div`
  width: 100%;

  .search-response {
    position: absolute;
    bottom: -35px;
    border-radius: 3px;
    background-color: #e5e5e5;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;
    padding: 0.5rem;

    p {
      font-size: 0.9rem;
    }
  }
`;

const Filter = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  h3 {
    font-size: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    display: block;

    h3 {
      margin-bottom: 1rem;
    }
  }
`;

const Tag = styled.li`
  display: flex;
  overflow: hidden;
  border-radius: 35px;
  border: 2px solid rgb(242, 242, 242);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(222, 235, 255);

    svg {
      color: rgb(0, 101, 252);
    }
  }

  .type {
    padding: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 0.8rem;
      font-weight: 800;
    }
  }
`;

const Info = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;

  .logo {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
    border-radius: 50%;
    border: 1px solid #d3d3d3;

    svg {
      color: rgb(0, 101, 252);
      font-size: 0.7rem;
    }
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

export default Search;
