import { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Cards from "./Cards";
import { useSelector } from "react-redux";

const ActivityCollapse = (props) => {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <Container>
      <TitleBanner>
        <h2>Mes activités ({props.data.length})</h2>
        {!show && <FaChevronUp onClick={() => setShow(!show)} />}
        {show && <FaChevronDown onClick={() => setShow(!show)} />}
      </TitleBanner>
      {show &&
        props.data.map((item, index) => (
          <Cards item={item} key={index} userId={user.id} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 1.5rem auto 1rem;
`;

const TitleBanner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: black;
  border-radius: 5px;

  h2 {
    font-size: 1rem;
    color: white;
  }

  svg {
    color: white;
    cursor: pointer;
  }
`;
export default ActivityCollapse;
