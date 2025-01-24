import DayMenu from "@components/DayMenu";
import { useQuery } from "@tanstack/react-query";
import { getDormitoryMenu } from "@apis/index";
import styled from "styled-components";
import { DayMenusProps } from "types/props";

const DormitoryMenuPage = () => {
  const {
    data: dayMenus,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["dormitoryMenu"],
    queryFn: getDormitoryMenu,
  });
  if (isLoading) {
    return <p>로딩중</p>;
  }
  if (error) {
    return <p>에러</p>;
  }
  return (
    <Wrapper>
      <Title>제 3생활관(AI관 옆) 메뉴</Title>
      <Info>식당 위치: 제3학생생활관 1층 학생식당</Info>
      <Info>
        운영 시간: 조식 8:00 ~ 9:00 / 중식 11:00 ~ 14:00 / 석식 17:30 ~ 18:30
        (외부인 이용 가능)
      </Info>
      <DayMenuWrapper>
        {dayMenus
          .slice()
          .reverse()
          .map((dayMenus: DayMenusProps, index: number) => (
            <DayMenu
              key={index}
              date={dayMenus.date}
              dayOfWeek={dayMenus.dayOfWeek}
              menus={dayMenus.menus}
            />
          ))}
      </DayMenuWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
`;
const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2vh 0 4vh 0;
`;

const Info = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1vh;
  color: #666;
`;

const DayMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 4vh 1vw;
  gap: 1rem 2rem;
  justify-items: center;
  align-items: stretch;
  @media (max-width: 1115px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default DormitoryMenuPage;
