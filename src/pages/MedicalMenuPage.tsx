import DayPageComponent from "@components/DayPageComponent";
import Loading from "@components/Loading";
import NoMenu from "@components/NoMenu";
import useGetDayMenu from "@hooks/queries/useGetDayMenu";

const MedicalMenuPage = () => {
  const restaurantName = "체육관(메디컬) 메뉴";
  const location = "메디컬캠퍼스 체육관 1층";
  const time = ["08:00 ~ 19:30"];
  const { data: dayMenus, error, isLoading } = useGetDayMenu("medical");

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>에러</p>;
  }
  return dayMenus?.result.dayMenus !== undefined ? (
    <DayPageComponent
      dayMenus={dayMenus?.result.dayMenus}
      restaurantName={restaurantName}
      location={location}
      time={time}
    />
  ) : (
    <NoMenu />
  );
};

export default MedicalMenuPage;
