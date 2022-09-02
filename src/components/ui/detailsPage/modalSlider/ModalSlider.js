import { Fragment, useEffect, useRef } from "react";
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

  useEffect(() => {
    handleOnClick(id);
  }, [id]);

  return (
    <Fragment>
      <Container>
        <Head>
          <FaArrowLeft onClick={closeModal} />
        </Head>
        <SliderLayout>
          <ContainerSlider {...settings} ref={sliderRef}>
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
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 400;
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  width: 100%;
  padding: 1rem 2rem;
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
  background-color: #444948;
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

  .slick-slide {
    visibility: hidden;
  }

  .slick-current {
    visibility: visible !important;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  display: flex !important;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    object-fit: contain;
  }
`;

export default ModalSlider;
