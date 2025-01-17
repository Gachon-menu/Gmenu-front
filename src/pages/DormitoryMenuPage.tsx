import TodayMenu from "@components/TodayMenu";
import styled from "styled-components";

const DormitoryMenuPage = () => {
  return (
    <Wrapper>
      <Title>제 3생활관(AI관 옆) 메뉴</Title>
      <Time>
        조식 8:00 ~ 9:00 / 중식 11:00 ~ 14:00 / 석식 17:30 ~ 18:30 (외부인 이용
        가능)
      </Time>
      <TodayMenuWrapper>
        <TodayMenu title={"월요일"} />
        <TodayMenu title={"화요일"} />
        <TodayMenu title={"수요일"} />
        <TodayMenu title={"목요일"} />
        <TodayMenu title={"금요일"} />
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
  margin: 2vh 0 5vh 0;
`;

const Time = styled.div`
  font-size: 1.1rem;
  margin-bottom: 4vh;
`;

const TodayMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 1vw;
  gap: 1rem 2rem;
  justify-items: center;
  align-items: center;
  @media (max-width: 1115px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default DormitoryMenuPage;
