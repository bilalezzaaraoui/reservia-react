import styled from "styled-components";
import { InfinitySpin } from "react-loader-spinner";

const LoadingContainer = () => {
  return (
    <Container>
      <InfinitySpin width="200" color="rgb(0,101,252)" />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingContainer;
