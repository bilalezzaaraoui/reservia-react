import styled from "styled-components";
import CardActivity from "./CardActivity";
import { useState, useEffect } from "react";
import db from "../../../firebase";
import LoadingContainer from "../loadingContainer/LoadingContainer";

const AllActivitiesCards = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const searchData = async () => {
      let activities = [];
      db.collection("activities").onSnapshot((snapshot) => {
        // eslint-disable-next-line array-callback-return
        snapshot.docs.map((doc) => {
          activities = [...activities, { id: doc.id, ...doc.data() }];
        });

        setData(activities);
      });
    };

    searchData();
  }, []);

  const orderPrice = (e) => {
    const target = e.target.value;
    if (target === "croissant") {
      const dataFilter = data
        .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        .map((item) => item);
      setData(dataFilter);
    }

    if (target === "decroissant") {
      const dataFilter = data
        .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        .map((item) => item);
      setData(dataFilter);
    }
  };

  if (data) {
    return (
      <Container>
        <Title>{`${data.length}`} expériences</Title>
        <SelectList onChange={orderPrice} defaultValue="Trier par prix">
          <option value="Trier par prix" disabled>
            Trier par prix
          </option>
          <option value="croissant">Prix croissant</option>
          <option value="decroissant">Prix décroissant</option>
        </SelectList>
        <ListOfActivities>
          {data.map((item, index) => (
            <CardActivity
              key={index}
              id={item.id}
              image={item.images[0]}
              video={item.video}
              city={item.city}
              title={item.title}
              price={item.price}
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

const Title = styled.h3`
  font-size: 2rem;
`;

const ListOfActivities = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
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

export default AllActivitiesCards;
