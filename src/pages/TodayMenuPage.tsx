import styled from "styled-components";
import { TodayMenusProps } from "types/props";
import TodayMenu from "@components/TodayMenu";
import { TitleMenu } from "types/type";
import useGetTodayMenu from "@hooks/queries/useGetTodayMenu";
import NoMenu from "@components/NoMenu";

const TodayMenuPage = () => {
  const { data: todayMenus, error, isLoading } = useGetTodayMenu();

  if (isLoading) {
    return <p>로딩중</p>;
  }
  if (error) {
    return <p>에러</p>;
  }

  const restaurants: TitleMenu[] = [
    "비전타워 1층 메뉴",
    "교육대학원(아름관) 메뉴",
    "제3생활관(AI관 옆) 메뉴",
    "체육관(메디컬) 메뉴",
  ];
  return (
    <Wrapper>
      <Title>가천대학교 오늘의 메뉴</Title>
      <TodayMenuWrapper>
        {todayMenus?.result.todayMenus !== undefined ? (
          todayMenus?.result.todayMenus.map((todayMenu: TodayMenusProps) => (
            <TodayMenu
              key={todayMenu.restaurantId}
              restaurantName={restaurants[todayMenu.restaurantId - 1]}
              restaurantId={todayMenu.restaurantId}
              menus={todayMenu.menus}
            />
          ))
        ) : (
          <NoMenu />
        )}
      </TodayMenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 1vh 0 8vh 0;
`;

const TodayMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 1vw;
  gap: 1rem 2rem;
  justify-items: center;
  align-items: stretch; /* 메뉴가 많은 높이에 맞춰 늘어남 */
  @media (max-width: 970px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default TodayMenuPage;
