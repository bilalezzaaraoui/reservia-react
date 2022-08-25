import { useSelector } from "react-redux";
import styled from "styled-components";
import HebergementCollapse from "../../components/ui/reservationPage/HebergementCollapse";
import ActivityCollapse from "../../components/ui/reservationPage/ActivityCollapse";

const ReservationPage = () => {
  const reservation = useSelector((state) => state.user.reservation);
  if (reservation.length >= 1) {
    const hebergementFiltered = reservation.filter((item) => {
      if (item.typeOfProduct === "hebergement") return item;
    });

    const activitiesFiltered = reservation.filter((item) => {
      if (item.typeOfProduct === "activity") return item;
    });

    return (
      <Container>
        <HebergementCollapse data={hebergementFiltered} />
        <ActivityCollapse data={activitiesFiltered} />
      </Container>
    );
  } else {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Message>Vous n'avez aucune réservation.</Message>
      </Container>
    );
  }
};

const Container = styled.div`
  flex: 1;
  margin-bottom: 2rem;
`;

const Message = styled.h1`
  color: rgb(0, 101, 252);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default ReservationPage;
