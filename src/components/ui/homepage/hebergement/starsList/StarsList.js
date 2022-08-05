import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StarsList = (props) => {
  const number = +props.number;
  let starsTotal = [];

  if (number >= 0 && number <= 5) {
    for (let i = 0; i < number; i++) {
      starsTotal.push(<FaStar style={{ color: "rgb(0, 101, 252)" }} key={i} />);
    }

    for (let i = starsTotal.length; i < 5; i++) {
      starsTotal.push(
        <FaStar style={{ color: "rgb(242, 242, 242)" }} key={i} />
      );
    }
  } else {
    for (let i = 0; i < 5; i++) {
      starsTotal.push(<FaStar style={{ color: "rgb(0, 101, 252)" }} key={i} />);
    }
  }

  return starsTotal;
};

export default StarsList;
