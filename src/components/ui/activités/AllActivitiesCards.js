import styled from "styled-components";
import CardActivity from "./CardActivity";
import { useState, useEffect } from "react";
import db from "../../../firebase";
import { useParams } from "react-router-dom";

const AllActivitiesCards = () => {
  const params = useParams();
  const [data, setData] = useState();
  console.log(params);

  useEffect(() => {
    const searchData = async () => {
      let activities = [];
      db.collection("activities").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          activities = [...activities, { id: doc.id, ...doc.data() }];
        });

        setData(activities);
      });
    };

    searchData();
  }, []);

  if (data) {
    return (
      <Container>
        <Title>{`${data.length}`} expériences</Title>
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
    return;
  }
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const ListOfActivities = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1.5rem;
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

export default AllActivitiesCards;
