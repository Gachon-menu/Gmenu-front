import DayPageComponent from "@components/DayPageComponent";
import Loading from "@components/Loading";
import NoMenu from "@components/NoMenu";
import useGetDayMenu from "@hooks/queries/useGetDayMenu";

const VisionMenuPage = () => {
  const restaurantName = "비전타워 1층 메뉴";
  const location = "비전타워 1층";
  const time = [
    "조식 07:30 ~ 9:30",
    "중식 A, B메뉴 11:00 ~ 13:30",
    "중식 C메뉴 12:00 ~ 14:00",
  ];
  const { data: dayMenus, error, isLoading } = useGetDayMenu("visiontower");

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

export default VisionMenuPage;
