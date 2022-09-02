import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import FilterList from "../homepage/hebergement/filterList/FilterList";
import LoadingContainer from "../loadingContainer/LoadingContainer";

const CardHebergement = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (props.images !== undefined && props.images.length >= 1) {
    return (
      <Link to={`/accommodation/${props.id}`}>
        <Card>
          <SliderLayout>
            <Container {...settings}>
              {props.images.map((index, key) => (
                <Wrap key={key}>
                  <img src={index} alt="Img de l'hébergement" />
                </Wrap>
              ))}
            </Container>
          </SliderLayout>
          <div className="card-info">
            <p className="location">{`${props.city}, ${props.country}`}</p>
            <p className="type">
              {props.type ? "Professionnel" : "Particulier"}
            </p>
            <p className="price">
              <span>{props.price} € </span>nuit
            </p>
            <LayoutFilterList>
              <FilterList filter={props.filter} />
            </LayoutFilterList>
          </div>
        </Card>
      </Link>
    );
  } else {
    return <LoadingContainer />;
  }
};

const Card = styled.li`
  .card-info {
    margin-top: 3px;
    padding-left: 0.3rem;

    .location {
      margin-bottom: 5px;
      font-weight: bold;
    }

    .type {
      color: gray;
      margin-bottom: 5px;
      font-weight: 300;
    }

    .price {
      margin-top: 3px;
      font-weight: 300;

      span {
        font-weight: 500;
      }
    }
  }
`;

const SliderLayout = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
`;
const Wrap = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled(Slider)`
  position: absolute !important;
  width: 100%;
  height: 100%;

  .slick-arrow {
    z-index: 100;
  }

  .slick-dots {
    position: absolute;
    bottom: 10px;

    li {
      width: 15px;
      &.slick-active {
        button:before {
          color: white;
          font-size: 9px;
        }
      }
      margin: 0 0px;
      button {
        &:before {
          font-size: 5px;
          color: #d3d3d3;
          opacity: 1;
        }
      }
    }
  }

  .slick-list {
    height: 100%;
  }

  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }
`;

const LayoutFilterList = styled.div`
  display: flex;
  column-gap: 5px;
  margin-top: 5px;

  div {
    background-color: rgb(222, 235, 255);
    padding: 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: rgb(0, 101, 252);
      font-size: 0.8rem;
    }
  }
`;

export default CardHebergement;
