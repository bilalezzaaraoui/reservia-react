import styled from "styled-components";
import { useEffect, Fragment, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { ModalAction } from "../../store/modalSlice/modalSlice";
import SliderDetails from "../../components/ui/detailsPage/slider/SliderDetails";
import DetailModal from "../../components/ui/detailsPage/modal/DetailModal";
import ModalSlider from "../../components/ui/detailsPage/modalSlider/ModalSlider";
import { useParams, useNavigate } from "react-router-dom";
import db from "../../firebase";
import Info from "../../components/ui/detailsPage/info/Info";
import { FaStar } from "react-icons/fa";
import { CartAction } from "../../store/cartSlice/cartSlice";
import LoadingContainer from "../../components/ui/loadingContainer/LoadingContainer";

const DetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const showDetail = useSelector((state) => state.modal.detail);
  const showSlider = useSelector((state) => state.modal.detailSlider);
  const [number, setNumber] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const retrieveData = async () => {
      db.collection("hebergement").onSnapshot((snapshot) => {
        let response = null;
        snapshot.docs.find((doc) => {
          if (doc.id === params.id) {
            response = { id: doc.id, ...doc.data() };
          }
        });

        if (response === null) {
          navigate("/*");
        } else {
          setData(response);
        }
      });
    };
    retrieveData();

    dispatch(CartAction.emptyCart());
  }, [params.id]);

  const whichNumber = (number) => {
    setNumber(number);
  };
  if (data.id !== undefined) {
    return (
      <Fragment>
        <Container>
          <Header>
            <Title>{data.title}</Title>
            <StarsAndLocation>
              <BlackStars>
                <FaStar />
                <span>{data.stars}</span>
              </BlackStars>

              <Location>{`${data.city},${data.country}`}</Location>
            </StarsAndLocation>
            <SliderDetails onSaveSlider={whichNumber} images={data.images} />
          </Header>
          <LayoutMobile>
            <Info
              data={data}
              price={data.pricePerNight}
              service={10}
              title={data.title}
              maxClient={data.numberOfClients}
              maxBedroom={data.numberOfBedroom}
              maxBed={data.numberOfBed}
              maxRestroom={data.numberOfRestroom}
              logement={data.logement}
              description1={data.description1}
              description2={data.description2}
            />
          </LayoutMobile>
        </Container>
        {showDetail &&
          createPortal(
            <DetailModal
              images={data.images}
              closeModal={() => dispatch(ModalAction.closeDetailModal())}
            />,
            document.getElementById("layout")
          )}
        {showSlider &&
          createPortal(
            <ModalSlider
              id={number}
              images={data.images}
              closeModal={() => dispatch(ModalAction.closeSliderModal())}
            />,
            document.getElementById("layout")
          )}
      </Fragment>
    );
  } else {
    return <LoadingContainer />;
  }
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
  margin: 1.5rem 0 0.3rem 0;

  @media (max-width: 430px) {
    width: 90%;
    margin: 0.5rem auto 0;
    font-size: 1rem;
  }
`;

const StarsAndLocation = styled.div`
  display: flex;
  column-gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 430px) {
    margin-bottom: 0;
    margin-top: 1rem;
    padding-left: 1rem;
  }
`;

const BlackStars = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;

  svg {
    font-size: 0.8rem;
  }
`;

const Location = styled.p`
  text-decoration: underline;
`;

const LayoutMobile = styled.div`
  @media (max-width: 430px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

export default DetailPage;
