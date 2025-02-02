import styled from "styled-components";
import { MenuItemProps } from "types/props";

const DayMenuItem = ({ type, menu }: MenuItemProps) => {
  const changedType = type.includes("아침")
    ? type.replace("아침", "조식")
    : type.includes("점심")
    ? type.replace("점심", "중식")
    : type.replace("저녁", "석식");
  return (
    <DayMenuItemWrapper>
      <Type>{changedType}</Type>
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
