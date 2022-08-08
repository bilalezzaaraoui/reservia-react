import styled from "styled-components";
import { GiClick } from "react-icons/gi";

const SliderDetails = (props) => {
  return (
    <Container>
      <HalfOne>
        <img src={props.images[0]} alt="img" />
      </HalfOne>
      <HalfTwo>
        <Quarter>
          <img src={props.images[1]} alt="img" />
        </Quarter>
        <Quarter>
          <img src={props.images[2]} alt="img" />
        </Quarter>
        <Quarter>
          <img src={props.images[3]} alt="img" />
        </Quarter>
        <Quarter>
          <img src={props.images[4]} alt="img" />
        </Quarter>
      </HalfTwo>
      <Button>
        <GiClick />
        <span>Afficher toutes les photos</span>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  height: 400px;
  display: flex;
  column-gap: 0.5rem;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  @media (max-width: 780px) {
    border-radius: 0;
    display: block;
  }
`;

const HalfOne = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;

    @media (max-width: 430px) {
      width: auto;
    }
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const HalfTwo = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.5rem;
  row-gap: 0.5rem;

  @media (max-width: 780px) {
    display: none;
  }
`;

const Quarter = styled.div`
  position: relative;

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  background-color: white;
  border: 2px solid black;
  padding: 5px 10px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  span {
    margin-left: 10px;
    color: black;
    letter-spacing: 1px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export default SliderDetails;
