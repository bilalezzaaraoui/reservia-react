import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardActivity = (props) => {
  const [state, setState] = useState(false);
  console.log(props);

  return (
    <Link to={`/activity/${props.id}`}>
      <Card>
        <div
          className="card-img"
          style={{ backgroundImage: `url(${props.image})` }}
          onMouseEnter={() => {
            setState(true);
          }}
          onMouseLeave={() => {
            setState(false);
          }}
        >
          <div
            className="card-video"
            style={state ? null : { display: "none" }}
          >
            <video autoPlay controls muted loop={true} playsInline={true}>
              <source src={`${props.video}`} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="card-info">
          <p className="city">{props.city}</p>
          <h4>{props.title}</h4>
          <p className="price">
            <span>À partir de {props.price}€</span>/personne
          </p>
        </div>
      </Card>
    </Link>
  );
};

const Card = styled.li`
  .card-img {
    position: relative;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    border: 1px solid #e0e0e0;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-info {
    margin-top: 3px;
    padding-left: 0.3rem;

    h4 {
      margin-top: 3px;
      font-weight: 300;
    }

    .city {
      margin-top: 5px;
      color: gray;
      font-size: 0.8rem;
      font-weight: 300;
    }

    .price {
      margin-top: 3px;
      font-weight: 300;

      span {
        font-weight: bold;
      }
    }
  }
`;

export default CardActivity;
