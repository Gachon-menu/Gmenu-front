import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import styled from "styled-components";
import { useSyncTabLinkWithURL } from "@hooks/useSyncTabLinkWithURL";

function RootLayOut() {
  useSyncTabLinkWithURL();
  return (
    <Wrapper>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;
const OutletWrapper = styled.div`
  padding: 5vh 12vw;
  display: flex;
  flex-direction: column;
`;

export default RootLayOut;
