import { getArmMenu } from "@apis/index";
import DayPageComponent from "@components/DayPageComponent";
import { useQuery } from "@tanstack/react-query";

const ArmMenuPage = () => {
  const restaurantName = "교육대학원(아름관) 메뉴";
  const location = "식당 위치: 교육대학원 지하 1층";
  const time =
    "운영 시간: 점심 11:30 ~ 13:30 / 저녁 17:30 ~ 19:00 (외부인 이용 불가)";
  const {
    data: dayMenus,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["armMenu"],
    queryFn: getArmMenu,
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

export default ArmMenuPage;
