import { useQuery } from "@tanstack/react-query";
import { getDayMenu } from "@apis/index";
import DayPageComponent from "@components/DayPageComponent";

const DormitoryMenuPage = () => {
  const restaurantName = "제3생활관(AI관 옆) 메뉴";
  const location = "제3학생생활관 1층 학생식당";
  const time = ["조식 8:00 ~ 9:00", "중식 11:00 ~ 14:00", "석식 17:30 ~ 18:30"];
  const {
    data: dayMenus,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["dormitoryMenu"],
    queryFn: () => getDayMenu("dormitory"),
  });
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

export default DormitoryMenuPage;
