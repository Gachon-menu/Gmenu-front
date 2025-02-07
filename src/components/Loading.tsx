import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingWrapper>
      <ClipLoader color="#004E96" size={50} speedMultiplier={0.7} />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 17rem;
  align-items: center;
  height: 100%;
`;

export default Loading;
