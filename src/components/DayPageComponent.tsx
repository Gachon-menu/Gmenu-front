import styled from "styled-components";
import { DayMenusProps } from "types/props";
import DayMenu from "./DayMenu";
import { TitleMenu } from "types/type";

interface DayPageComponentProps {
  dayMenus: DayMenusProps[];
  restaurantName: TitleMenu;
  location: string;
  time: string;
}

const DayPageComponent = ({
  dayMenus,
  restaurantName,
  location,
  time,
}: DayPageComponentProps) => {
  return (
    <Wrapper>
      <Title>{restaurantName}</Title>
      <Info>{location}</Info>
      <Info>{time}</Info>
      <DayMenuWrapper>
        {dayMenus
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
