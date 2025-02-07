import styled from "styled-components";

const NoMenu = () => {
  return <NoMenuWrapper>메뉴가 없습니다.</NoMenuWrapper>;
};

const NoMenuWrapper = styled.div`
  display: flex;
  padding-top: 10rem;
  justify-content: center;
  height: 100%;
  font-size: 1.3rem;
`;

export default NoMenu;
