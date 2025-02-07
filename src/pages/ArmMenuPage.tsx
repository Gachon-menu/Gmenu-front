import DayPageComponent from "@components/DayPageComponent";
import Loading from "@components/Loading";
import NoMenu from "@components/NoMenu";
import useGetDayMenu from "@hooks/queries/useGetDayMenu";

const ArmMenuPage = () => {
  const restaurantName = "교육대학원(아름관) 메뉴";
  const location = "교육대학원 지하 1층";
  const time = ["중식 11:30 ~ 13:30", "석식 17:30 ~ 19:00"];
  const { data: dayMenus, error, isLoading } = useGetDayMenu("arm");

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

export default ArmMenuPage;
