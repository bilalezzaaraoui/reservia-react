/* eslint-disable array-callback-return */
import styled from "styled-components";
import CardHebergement from "./CardHebergement";
import { useEffect, useState } from "react";
import db from "../../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import LoadingContainer from "../loadingContainer/LoadingContainer";

const AllHebergementCards = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const searchData = async () => {
      let hebergement = [];
      db.collection("hebergement").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          hebergement = [...hebergement, { id: doc.id, ...doc.data() }];
        });

        if (params.filter && typeof params.filter === "string") {
          const target = params.filter;
          const filterData = hebergement.filter((item) => {
            const res = item.filter.find((element) => {
              if (element === target) {
                return element;
              }
            });

            if (typeof res === "string") {
              return item;
            }
          });

          if (filterData.length >= 1) {
            setData(filterData);
          } else {
            navigate("/*");
          }
        } else if (params.search && typeof params.search === "string") {
          const target = params.search;
          const filterData = hebergement.filter((item) => {
            if (item.city.toLowerCase().startsWith(target.toLowerCase())) {
              return item;
            }
          });

          if (filterData.length >= 1) {
            setData(filterData);
          } else {
            navigate("/*");
          }
        } else {
          setData(hebergement);
        }
      });
    };

    searchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const orderPrice = (e) => {
    const target = e.target.value;
    if (target === "croissant") {
      const dataFilter = data
        .sort(
          (a, b) => parseFloat(a.pricePerNight) - parseFloat(b.pricePerNight)
        )
        .map((item) => item);
      setData(dataFilter);
    }

    if (target === "decroissant") {
      const dataFilter = data
        .sort(
          (a, b) => parseFloat(b.pricePerNight) - parseFloat(a.pricePerNight)
        )
        .map((item) => item);
      setData(dataFilter);
    }
  };

  if (data) {
    return (
      <Container>
        <SelectList onChange={orderPrice} defaultValue="Trier par prix">
          <option value="Trier par prix" disabled>
            Trier par prix
          </option>
          <option value="croissant">Prix croissant</option>
          <option value="decroissant">Prix d??croissant</option>
        </SelectList>
        <ListOfActivities>
          {data.map((item, index) => (
            <CardHebergement
              key={index}
              id={item.id}
              images={item.images}
              city={item.city}
              country={item.country}
              type={item.type}
              price={item.pricePerNight}
              filter={item.filter}
            />
          ))}
        </ListOfActivities>
      </Container>
    );
  } else {
    return <LoadingContainer />;
  }
};

const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
`;

const ListOfActivities = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 3rem;
  row-gap: 2rem;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SelectList = styled.select`
  background-color: #deebff;
  margin-top: 0.5rem;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
`;

export default AllHebergementCards;
