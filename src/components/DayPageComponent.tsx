import styled from "styled-components";
import { DayMenusProps } from "types/props";
import DayMenu from "./DayMenu";
import { TitleMenu } from "types/type";
import { useEffect, useState } from "react";

interface DayPageComponentProps {
  dayMenus: DayMenusProps[] | undefined;
  restaurantName: TitleMenu;
  location: string;
  time: string[];
}

const DayPageComponent = ({
  dayMenus,
  restaurantName,
  location,
  time,
}: DayPageComponentProps) => {
  const [changeLine, setChangeLine] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  //화면 크기 변화 감지
  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setChangeLine(e.matches);
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Wrapper>
      <Title>{restaurantName}</Title>
      <Info>식당 위치: {location}</Info>
      <TimeWrapper>
        <Info>운영 시간:</Info>
        <Time>{changeLine ? time.join("\n") : time.join(" / ")}</Time>
      </TimeWrapper>

      <DayMenuWrapper>
        {dayMenus !== undefined &&
          dayMenus
            .slice()
            .reverse()
            .map((dayMenus: DayMenusProps, index: number) => {
              // menus를 mealType 기준으로 정렬
              const sortedMenus = dayMenus.menus.sort((a, b) => {
                const mealOrder: { [key: string]: number } = {
                  아침: 0,
                  점심: 1,
                  저녁: 2,
                };

                return mealOrder[a.mealType] - mealOrder[b.mealType];
              });

              return (
                <DayMenu
                  key={index}
                  date={dayMenus.date}
                  dayOfWeek={dayMenus.dayOfWeek}
                  menus={sortedMenus} // 정렬된 메뉴 전달
                />
              );
            })}
      </DayMenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;
const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 1vh 0 4vh 0;
`;

const Info = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1vh;
  color: #666;
  flex-shrink: 0;
`;
const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  margin-bottom: 1vh;
  color: #666;
`;

const Time = styled.div`
  margin-left: 0.25rem;
  @media (max-width: 800px) {
    white-space: pre-line; /* 작은 화면에서 줄바꿈 적용 */
  }
`;

const DayMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 5vh 1vw;
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

export default DayPageComponent;
