import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LayoutAction } from "../../store/layoutSlice/layoutSlice";
import SliderDetails from "../../components/ui/detailsPage/slider/SliderDetails";
import Info from "../../components/ui/detailsPage/info/Info";
import Img1 from "../../assets/image/sliderDetails/1.webp";
import Img2 from "../../assets/image/sliderDetails/2.webp";
import Img3 from "../../assets/image/sliderDetails/3.webp";
import Img4 from "../../assets/image/sliderDetails/4.webp";
import Img5 from "../../assets/image/sliderDetails/5.webp";
import Img6 from "../../assets/image/sliderDetails/6.webp";
import Img7 from "../../assets/image/sliderDetails/7.webp";

const DetailPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LayoutAction.renderSmall());
  }, []);

  const data = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];
  return (
    <Container>
      <Header>
        <Title>
          Le luxueux phare de la villa en bord de mer Ligero sur l'hôte est
        </Title>
        <SliderDetails images={data} />
      </Header>
      <LayoutMobile>
        <Info />
      </LayoutMobile>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

const Header = styled.div`
  @media (max-width: 430px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1.5rem 0;

  @media (max-width: 430px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

const LayoutMobile = styled.div`
  @media (max-width: 430px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

export default DetailPage;
