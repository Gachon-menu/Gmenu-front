import { getVisionMenu } from "@apis/index";
import DayPageComponent from "@components/DayPageComponent";
import { useQuery } from "@tanstack/react-query";

const VisionMenuPage = () => {
  const restaurantName = "비전타워 1층 메뉴";
  const location = "식당 위치: 비전타워 1층";
  const time =
    "운영 시간: 조식 7:30 ~ 9:30 / 중식 A, B메뉴 11:00 ~ 13:30, C메뉴 12:00 ~ 14:00";
  const {
    data: dayMenus,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["visionMenu"],
    queryFn: getVisionMenu,
  });
  if (isLoading) {
    return <p>로딩중</p>;
  }
  if (error) {
    return <p>에러</p>;
  }
  return (
    <DayPageComponent
      dayMenus={dayMenus}
      restaurantName={restaurantName}
      location={location}
      time={time}
    />
  );
};

export default VisionMenuPage;
