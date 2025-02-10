import styled from "styled-components";
import { TodayMenusProps } from "types/props";
import TodayMenu from "@components/TodayMenu";
import { TitleMenu } from "types/type";
import useGetTodayMenu from "@hooks/queries/useGetTodayMenu";
import NoMenu from "@components/NoMenu";
import Loading from "@components/Loading";

const TodayMenuPage = () => {
  const { data: todayMenus, error, isLoading } = useGetTodayMenu();

  if (isLoading) {
    return <Loading />;
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

  const menus = todayMenus?.result.todayMenus;
  return (
    <Wrapper>
      <Title>가천대학교 오늘의 메뉴</Title>
      <Info>식단은 매 주 월요일 오전 10시에 업데이트 됩니다.</Info>
      {menus !== undefined && menus.length > 0 ? (
        <TodayMenuWrapper>
          {menus.map((todayMenu: TodayMenusProps) => (
            <TodayMenu
              key={todayMenu.restaurantId}
              restaurantName={restaurants[todayMenu.restaurantId - 1]}
              restaurantId={todayMenu.restaurantId}
              menus={todayMenu.menus}
            />
          ))}
        </TodayMenuWrapper>
      ) : (
        <NoMenu />
      )}
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

const Info = styled.div`
  font-size: 1.1rem;
  margin-bottom: 2vh;
  color: #666;
  flex-shrink: 0;
`;

const TodayMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 5vh 1vw;
  gap: 1rem 2rem;
  justify-items: center;
  align-items: stretch; /* 메뉴가 많은 높이에 맞춰 늘어남 */
  @media (max-width: 970px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default TodayMenuPage;
