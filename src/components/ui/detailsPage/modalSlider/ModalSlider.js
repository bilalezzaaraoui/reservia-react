import { Fragment, useRef } from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalSlider = ({ id = 0, closeModal, images }) => {
  const sliderRef = useRef();

  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(id);

  //   handleOnClick(id);

  return (
    <Fragment>
      <Container>
        <Head>
          <FaArrowLeft onClick={closeModal} />
        </Head>
        <SliderLayout>
          <ContainerSlider {...settings} ref={sliderRef} slickGoTo={id}>
            {images.map((index, key) => (
              <Wrap key={key}>
                <img src={index} alt="Img de l'hébergement" />
              </Wrap>
            ))}
          </ContainerSlider>
        </SliderLayout>
        {/* <div></div> */}
      </Container>
    </Fragment>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 400;
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  width: 100%;
  padding: 1rem 2rem 0;
  z-index: 200;

  svg {
    color: #262626;
    cursor: pointer;
  }
`;

const SliderLayout = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const ContainerSlider = styled(Slider)`
  width: 80%;
  height: 60vh;

  .slick-arrow {
    z-index: 100;
  }

  .slick-dots {
    /* position: absolute;
    bottom: 10px; */

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
    left: 8rem;
  }
  .slick-next {
    right: 8rem;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex !important;
  justify-content: center;

  img {
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
  }
`;

export default ModalSlider;
