import DayPageComponent from "@components/DayPageComponent";
import useGetDayMenu from "@hooks/queries/useGetDayMenu";

const MedicalMenuPage = () => {
  const restaurantName = "체육관(메디컬) 메뉴";
  const location = "메디컬캠퍼스 체육관 1층";
  const time = ["08:00 ~ 19:30"];
  const { data: dayMenus, error, isLoading } = useGetDayMenu("medical");

  if (isLoading) {
    return <p>로딩중</p>;
  }
  if (error) {
    return <p>에러</p>;
  }
  return (
    <DayPageComponent
      dayMenus={dayMenus?.result.dayMenus}
      restaurantName={restaurantName}
      location={location}
      time={time}
    />
  );
};

export default MedicalMenuPage;
