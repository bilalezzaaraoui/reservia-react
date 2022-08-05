import { Link } from "react-router-dom";
import styled from "styled-components";
import FirstImage from "../../../../assets/image/activity/1.jpg";

const Activity = () => {
  return (
    <Container>
      <h3>Activités à Marseille</h3>
      <Location>
        <Link to="/" className="full">
          <Card>
            <ImgDiv style={{ backgroundImage: `url(${FirstImage})` }} />
            <InfoDiv>
              <h4>Vieux Port</h4>
            </InfoDiv>
          </Card>
        </Link>
        <Link to="/" className="divised-up">
          <Card>
            <ImgDiv style={{ backgroundImage: `url(${FirstImage})` }} />
            <InfoDiv>
              <h4>Vieux Port</h4>
            </InfoDiv>
          </Card>
        </Link>
        <Link to="/" className="divised-down">
          <Card>
            <ImgDiv style={{ backgroundImage: `url(${FirstImage})` }} />
            <InfoDiv>
              <h4>Vieux Port</h4>
            </InfoDiv>
          </Card>
        </Link>
        <Link to="/" className="full">
          <Card>
            <ImgDiv style={{ backgroundImage: `url(${FirstImage})` }} />
            <InfoDiv>
              <h4>Vieux Port</h4>
            </InfoDiv>
          </Card>
        </Link>
        <Link to="/" className="divised-up">
          <Card>
            <ImgDiv style={{ backgroundImage: `url(${FirstImage})` }} />
            <InfoDiv>
              <h4>Vieux Port</h4>
            </InfoDiv>
          </Card>
        </Link>
        <Link to="/" className="divised-down">
          <Card>
            <ImgDiv style={{ backgroundImage: `url(${FirstImage})` }} />
            <InfoDiv>
              <h4>Vieux Port</h4>
            </InfoDiv>
          </Card>
        </Link>
        {/* <div class="card-location loc-2">
          <a href="#">
            <div class="loc-img loc-img-2"></div>
            <div class="loc-info info-2">
              <h4>Fort de Pomègues</h4>
            </div>
          </a>
        </div>
        <div class="card-location loc-3">
          <a href="#">
            <div class="loc-img loc-img-3"></div>
            <div class="loc-info info-3">
              <h4>Îles du Frioul</h4>
            </div>
          </a>
        </div>
        <div class="card-location loc-4">
          <a href="#">
            <div class="loc-img loc-img-4"></div>
            <div class="loc-info info-4">
              <h4>Parc National des Calanques</h4>
            </div>
          </a>
        </div>
        <div class="card-location loc-5">
          <a href="#">
            <div class="loc-img loc-img-5"></div>
            <div class="loc-info info-5">
              <h4>Notre-Dame-de-la-Garde</h4>
            </div>
          </a>
        </div>
        <div class="card-location loc-6">
          <a href="#">
            <div class="loc-img loc-img-6"></div>
            <div class="loc-info info-6">
              <h4>Parc Longchamp</h4>
            </div>
          </a>
        </div> */}
      </Location>
    </Container>
  );
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

  .full {
    grid-row: 1 / span 2;
  }

  .divised-up {
    grid-row: 1 / span 1;

    h4 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }

  .divised-down {
    grid-row: 2 / span 1;

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

    .full {
      grid-row: auto;

      h4 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }

    .divised-up {
      grid-row: auto;
    }

    .divised-down {
      grid-row: auto;
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
  align-items: center;

  h4 {
    padding-left: 1rem;
  }
`;

export default Activity;
