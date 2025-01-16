import styled from "styled-components";
import TodayMenuItem from "./TodayMenuItem";

interface MenuProps {
  title: string;
}

const TodayMenu = ({ title }: MenuProps) => {
  return (
    <TodayMenuWrapper>
      <TodayMenuTitle>{title}</TodayMenuTitle>
      <TodayMenuItem type="아침" menu="등록된 식단내용이(가) 없습니다." />
      <TodayMenuItem type="점심" menu="된장찌개, 쌀밥, 김치, 두부조림" />
      <TodayMenuItem type="저녁" menu="라면, 김밥, 김치, 계란후라이" />
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
