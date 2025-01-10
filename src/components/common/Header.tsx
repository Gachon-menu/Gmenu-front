import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/gachonLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </HeaderLogo>
      {/* 메뉴 아이템 */}
      <HeaderMenuWrapper>
        <HeaderMenuItem>
          <Link to="/dormitory">제3생활관(AI관 옆) 메뉴</Link>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <Link to="/arm">교육대학원(아름관) 메뉴</Link>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <Link to="/vision">비전타워 1층 메뉴</Link>
        </HeaderMenuItem>
      </HeaderMenuWrapper>
      {/* 메뉴 아이콘 */}
      <MenuIcon icon={faBars} />
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

const HeaderMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* 작은 화면에서는 숨김 */
  @media (max-width: 1000px) {
    display: none;
  }
`;

const HeaderMenuItem = styled.div`
  margin: 0 5vw;
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

const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  cursor: pointer;

  /* 큰 화면에서는 숨기되, 공간은 차지하도록 설정 */
  visibility: hidden;

  /* 작은 화면에서는 보이게 */
  @media (max-width: 1000px) {
    visibility: visible;
  }
`;

export default Header;
