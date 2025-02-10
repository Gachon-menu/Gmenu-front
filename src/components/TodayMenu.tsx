import styled from "styled-components";
import TodayMenuItem from "@components/TodayMenuItem";
import { MenuProps, TodayMenusProps } from "types/props";
import { TitleItems } from "@shared/constants";
import { useNavigate } from "react-router-dom";
import { useTabLinkStore } from "@store/useTabStore";

const TodayMenu = ({
  restaurantName,
  restaurantId,
  menus,
}: TodayMenusProps) => {
  const navigate = useNavigate();
  const { setTabLink } = useTabLinkStore();
  const handleClickMenu = () => {
    const path = TitleItems.find((item) => item.label === restaurantName)?.path;
    if (path) {
      navigate(path);
      setTabLink(path);
    }
  };
  return (
    <TodayMenuWrapper onClick={handleClickMenu}>
      <TodayMenuTitle>{restaurantName}</TodayMenuTitle>
      {menus.map((typeMenu: MenuProps, index: number) => (
        <TodayMenuItem
          key={`${restaurantId}-${index}`}
          type={typeMenu.mealType}
          menu={typeMenu.menu}
        />
      ))}
    </TodayMenuWrapper>
  );
};

const TodayMenuWrapper = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  width: 100%;
  max-width: 35rem;
  flex-direction: column;
  margin-bottom: 3rem;
  cursor: pointer;

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

const TodayMenuTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem 0;
  width: 100%;
`;

export default TodayMenu;
