import styled from "styled-components";
import { DayMenusProps, MenuProps } from "types/props";
import DayMenuItem from "./DayMenuItem";

const DayMenu = ({ date, dayOfWeek, menus }: DayMenusProps) => {
  return (
    <DayMenuWrapper>
      <DayMenuTitle>{`${date} (${dayOfWeek})`}</DayMenuTitle>
      {menus.map(
        (typeMenu: Pick<MenuProps, "mealType" | "menu">, index: number) => (
          <DayMenuItem
            key={index}
            type={typeMenu.mealType}
            menu={typeMenu.menu}
          />
        )
      )}
    </DayMenuWrapper>
  );
};

const DayMenuWrapper = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  width: 100%;
  max-width: 35rem;
  flex-direction: column;
  margin-bottom: 3rem;

  /* 애니메이션 효과 */
  animation: fadeInUp 0.8s ease;

  @keyframes fadeInUp {
    from {
      transform: translateY(40px); /* 아래에서 시작 */
      opacity: 0; /* 투명하게 시작 */
    }
    to {
      transform: translateY(0); /* 원래 위치 */
      opacity: 1; /* 완전히 보이게 */
    }
  }
`;

const DayMenuTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem 0;
  width: 100%;
`;

export default DayMenu;
