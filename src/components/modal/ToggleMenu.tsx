import React from "react";
import { SwipeableDrawer, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { TitleItems } from "@shared/constants";
import { MenuLinkProps } from "types/props";
import { useTabLinkStore } from "@store/useTabStore";

const ToggleMenu = ({ maxWidth }: { maxWidth: number }) => {
  const navigate = useNavigate();
  const { tabLink, setTabLink } = useTabLinkStore();
  const [state, setState] = React.useState({
    right: false, // 오른쪽에서만 Drawer를 제어
  });

  const toggleDrawer = (open: boolean) => () => {
    setState({ right: open });
  };

  const handleClickTab = (path: string) => () => {
    navigate(path);
    toggleDrawer(false);
    setTabLink(path);
  };

  return (
    <div>
      <MenuIcon
        icon={faBars}
        onClick={toggleDrawer(true)}
        maxWidth={maxWidth}
      />
      {/* SwipeableDrawer: 오른쪽에서만 열리도록 설정 */}
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)} // 닫기
        onOpen={toggleDrawer(true)} // 열기
      >
        <List>
          {TitleItems.map(({ path, label }: MenuLinkProps) => (
            <ListItemWrapper
              key={path}
              onClick={handleClickTab(path)}
              selectedTab={tabLink === path}
            >
              {label}
            </ListItemWrapper>
          ))}
        </List>
      </SwipeableDrawer>
    </div>
  );
};
const MenuIcon = styled(FontAwesomeIcon)<{ maxWidth: number }>`
  font-size: 1.5rem;
  cursor: pointer;

  /* 큰 화면에서는 숨기되, 공간은 차지하도록 설정 */
  visibility: hidden;

  /* 작은 화면에서는 보이게 */
  @media (max-width: ${(props) => props.maxWidth}px) {
    visibility: visible;
  }
`;

const ListItemWrapper = styled(ListItem)<{ selectedTab: boolean }>`
  margin: 3vh 5vw;
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

export default ToggleMenu;
