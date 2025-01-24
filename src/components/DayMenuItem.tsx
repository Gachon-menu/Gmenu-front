import styled from "styled-components";
import { MenuItemProps } from "types/props";

const DayMenuItem = ({ type, menu }: MenuItemProps) => {
  return (
    <DayMenuItemWrapper>
      <Type>{type}</Type>
      <Menu>{menu}</Menu>
    </DayMenuItemWrapper>
  );
};

const DayMenuItemWrapper = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
`;

const Type = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Menu = styled.div``;

export default DayMenuItem;
