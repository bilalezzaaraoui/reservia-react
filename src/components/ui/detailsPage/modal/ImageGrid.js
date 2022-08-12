import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

const ImageGrid = (props) => {
  return (
    <Container>
      <Head>
        <FaArrowLeft onClick={props.closeModal} />
      </Head>
      <Body>
        <Layout>
          {props.images.map((item, key) => {
            return (
              <li key={key}>
                <img src={item} alt="logo" />
              </li>
            );
          })}
        </Layout>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Head = styled.div`
  position: fixed;
  width: 100%;
  padding: 1rem 2rem;
  background-color: white;
  z-index: 200;

  svg {
    color: #262626;
    cursor: pointer;
  }
`;

const Body = styled.div`
  width: 100vw;
  position: relative;
  top: 3.5rem;
`;

const Layout = styled.ul`
  width: 60vw;
  margin: 0 auto;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  row-gap: 2px;

  li {
    width: 100%;

    &:nth-child(3n) {
      grid-column: 1 / span 2;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default ImageGrid;
