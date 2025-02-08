import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "@img/gachonLogo.png";
import ToggleMenu from "@components/modal/ToggleMenu";
import { TitleItems } from "@shared/constants";
import { MenuLinkProps } from "types/props";
import { useTabLinkStore } from "@store/useTabStore";

const Header = () => {
  const maxWidth = 1115;
  const navigate = useNavigate();
  const { tabLink, setTabLink } = useTabLinkStore();

  const handleClickTab = (path: string) => () => {
    navigate(path);
    setTabLink(path);
    console.log(tabLink);
  };
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <img src={logo} alt="logo" onClick={handleClickTab("/")} />
      </HeaderLogo>
      {/* 메뉴 아이템 */}
      <HeaderMenuWrapper maxWidth={maxWidth}>
        {TitleItems.slice(1).map(({ path, label }: MenuLinkProps) => (
          <HeaderMenuItem
            key={path}
            onClick={handleClickTab(path)}
            selectedTab={tabLink === path}
          >
            {label}
          </HeaderMenuItem>
        ))}
      </HeaderMenuWrapper>
      <ToggleMenu maxWidth={maxWidth} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  height: 5vh;
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
  cursor: pointer;
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

const HeaderMenuItem = styled.div<{ selectedTab: boolean }>`
  margin: 0 3vw;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => (props.selectedTab ? "#004E96" : "black")};

  /* 마우스 올릴 때 밑줄 생기게 */
  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
    cursor: pointer;
  }
`;

export default Header;
