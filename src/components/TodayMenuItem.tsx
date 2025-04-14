import { changeMealType } from "@shared/changeMealType";
import styled from "styled-components";
import { MenuItemProps } from "types/props";

const TodayMenuItem = ({ type, menu }: MenuItemProps) => {
  return (
    <TodayMenuItemWrapper>
      <Type>{changeMealType(type)}</Type>
      {menu}
    </TodayMenuItemWrapper>
  );
};

const TodayMenuItemWrapper = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
`;

const Type = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export default TodayMenuItem;
