import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "@img/gachonLogo.png";
import ToggleMenu from "@components/modal/ToggleMenu";

const Header = () => {
  const maxWidth = 1115;
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </HeaderLogo>
      {/* 메뉴 아이템 */}
      <HeaderMenuWrapper maxWidth={maxWidth}>
        <HeaderMenuItem>
          <Link to="/dormitory">제 3생활관(AI관 옆) 메뉴</Link>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <Link to="/arm">교육대학원(아름관) 메뉴</Link>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <Link to="/vision">비전타워 1층 메뉴</Link>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <Link to="/medical">체육관(메디컬) 메뉴</Link>
        </HeaderMenuItem>
      </HeaderMenuWrapper>
      <ToggleMenu maxWidth={maxWidth} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  padding: 1.5rem 8vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const HeaderLogo = styled.div`
  img {
    width: 2rem;
  }
`;

const HeaderMenuWrapper = styled.div<{ maxWidth: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  /* 작은 화면에서는 숨김 */
  @media (max-width: ${(props) => props.maxWidth}px) {
    display: none;
  }
`;

const HeaderMenuItem = styled.div`
  margin: 0 3vw;
  a {
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    font-weight: 500;

    /* 마우스 올릴 때 밑줄 생기게 */
    &:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }
`;

export default Header;
