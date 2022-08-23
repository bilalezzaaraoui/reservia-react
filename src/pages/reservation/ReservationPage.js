import { useSelector } from "react-redux";
import styled from "styled-components";

const ReservationPage = () => {
  const reservation = useSelector((state) => state.user.reservation);
  if (typeof reservation !== "undefined" || reservation.length >= 1) {
    const hebergementFiltered = reservation.filter((item) => {
      if (item.typeOfProduct === "hebergement") return item;
    });

    const activitiesFiltered = reservation.filter((item) => {
      if (item.typeOfProduct === "activity") return item;
    });

    return (
      <Container>
        {/* <HebergementCollapse data={hebergementFiltered} />
        <ActivityCollapse data={activitiesFiltered} /> */}
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
`;

const Message = styled.h1`
  color: rgb(0, 101, 252);
`;

export default ReservationPage;
