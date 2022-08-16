import { Link } from "react-router-dom";
import styled from "styled-components";
import { ActivityAction } from "../../../../store/activitySlice/activitySlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import db from "../../../../firebase";

const Activity = () => {
  const dispatch = useDispatch();
  const activitiesOriginal = useSelector((state) => state.activities.data);

  useEffect(() => {
    const searchData = async () => {
      let activities = [];
      db.collection("activities").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          activities = [...activities, { id: doc.id, ...doc.data() }];
        });

        dispatch(ActivityAction.createActivity(activities));
      });
    };

    searchData();
  }, []);

  if (activitiesOriginal.length >= 1) {
    const data = activitiesOriginal.slice(0, 6);
    return (
      <Container>
        <h3>Activités disponible</h3>
        <Location>
          {data.map((item, key) => (
            <Link to={`/activity/${item.id}`} key={key} className="full">
              <Card>
                <ImgDiv style={{ backgroundImage: `url(${item.images[0]})` }} />
                <InfoDiv>
                  <h4>{item.city}</h4>
                  <p>{item.country}</p>
                </InfoDiv>
              </Card>
            </Link>
          ))}
        </Location>
      </Container>
    );
  } else {
    return;
  }
};

const Container = styled.section`
  width: 90%;
  margin: 0 auto 2rem;

  h3 {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 2rem 1.5rem;
  }
`;

const Location = styled.div`
  height: 520px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  a:nth-child(1),
  a:nth-child(4) {
    grid-row: 1 / span 2;
  }

  a:nth-child(2),
  a:nth-child(5) {
    grid-row: 1 / span 1;

    h4 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    height: 600px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    a:nth-child(1),
    a:nth-child(4) {
      grid-row: auto;

      h4 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  transition: 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;
const ImgDiv = styled.div`
  background-size: cover;
  width: 100%;
  height: 90%;
`;
const InfoDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    padding: 0.5rem 0 0 1rem !important;
  }

  p {
    padding: 0.2rem 0 0.5rem 1rem;
    font-size: 0.8rem;
    color: #949295;
  }
`;

export default Activity;
