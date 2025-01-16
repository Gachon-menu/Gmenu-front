import styled from "styled-components";
import TodayMenu from "@components/TodayMenu";

const TodayMenuPage = () => {
  return (
    <Wrapper>
      <Title>가천대학교 오늘의 메뉴</Title>
      <TodayMenuWrapper>
        <TodayMenu title={"제3생활관(AI관 옆) 메뉴"} />
        <TodayMenu title={"교육대학원(아름관) 메뉴"} />
        <TodayMenu title={"비전타워 1층 메뉴"} />
        <TodayMenu title={"체육관(메디컬) 메뉴"} />
      </TodayMenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2vh 0 8vh 0;
`;

const TodayMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 1vw;
  gap: 1rem 2rem;
  justify-items: center;
  align-items: center;
  @media (max-width: 970px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default TodayMenuPage;
