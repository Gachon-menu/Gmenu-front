import styled from "styled-components";

interface TodayMenuItemProps {
  type: string;
  menu: string;
}

const TodayMenuItem = ({ type, menu }: TodayMenuItemProps) => {
  return (
    <TodayMenuItemWrapper>
      <Type>{type}</Type>
      <Menu>{menu}</Menu>
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
  margin-bottom: 0.5rem;
`;

const Menu = styled.div``;

export default TodayMenuItem;
