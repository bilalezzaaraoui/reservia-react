import styled from "styled-components";
import { useState } from "react";
import FirstImage from "../../../assets/image/activity/1.jpg";
import FirstVideo from "../../../assets/video/1.webm";

const CardActivity = () => {
  const [state, setState] = useState(false);

  return (
    <Card>
      <div
        className="card-img"
        style={{ backgroundImage: `url(${FirstImage})` }}
        onMouseEnter={() => {
          setState(true);
        }}
        onMouseLeave={() => {
          setState(false);
        }}
      >
        <div className="card-video" style={state ? null : { display: "none" }}>
          <video autoPlay controls muted loop={true} playsInline={true}>
            <source src={FirstVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="card-info">
        <h4>Vieux Port</h4>
        <p>
          <span>À partir de 90€</span>/personne
        </p>
      </div>
    </Card>
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
    margin-top: 0.5rem;
    padding-left: 0.3rem;

    h4 {
      font-weight: normal;
    }

    p {
      margin-top: 0.5rem;

      span {
        font-weight: bold;
      }
    }
  }
`;

export default CardActivity;
