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

const Search = () => {
  const handleFilter = (e) => {
    console.log(e.target.closest("li"));
  };
  return (
    <Container>
      <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
      <p className="info-line">En plein centre ville ou en pleine nature</p>
      <SearchBar>
        <div className="marker">
          <FaMapMarkerAlt />
        </div>

        <form>
          <input
            type="search"
            className="searchbar"
            placeholder="Marseille, France"
          />
        </form>
        <button type="submit">Rechercher</button>
        <button type="submit" className="responsive">
          <FaSearch />
        </button>
      </SearchBar>
      <Filter>
        <h3>Filtres</h3>
        <ul>
          <Tag onClick={handleFilter}>
            <div className="logo">
              <FaMoneyBillWave />
            </div>
            <div className="type">
              <span>Économique</span>
            </div>
          </Tag>
          <Tag onClick={handleFilter}>
            <div className="logo">
              <FaChild />
            </div>
            <div className="type">
              <span>Familial</span>
            </div>
          </Tag>
          <Tag onClick={handleFilter}>
            <div className="logo">
              <FaHeart />
            </div>
            <div className="type">
              <span>Romantique</span>
            </div>
          </Tag>
          <Tag onClick={handleFilter}>
            <div className="logo">
              <FaDog />
            </div>
            <div className="type">
              <span>Animaux autorisés</span>
            </div>
          </Tag>
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
  overflow: hidden;
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
    flex: 1;
    display: flex;
    align-items: center;
    padding: 1px 0;

    input {
      width: 100%;
      height: 100%;
      padding-left: 0.5rem;
      border: none;
    }
  }

  button {
    border: none;
    padding: 0 0.6rem;
    background-color: rgb(0, 101, 252);
    color: rgb(255, 255, 255);
    font-weight: 700;
  }

  .responsive {
    display: none;
  }

  @media (max-width: 768px) {
    width: auto;
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
