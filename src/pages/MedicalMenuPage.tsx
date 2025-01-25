import { getMedicalMenu } from "@apis/index";
import DayPageComponent from "@components/DayPageComponent";
import { useQuery } from "@tanstack/react-query";

const MedicalMenuPage = () => {
  const restaurantName = "체육관(메디컬) 메뉴";
  const location = "식당 위치: 메디컬캠퍼스 체육관 1층";
  const time = "운영 시간: 08:00 ~ 19:30";
  const {
    data: dayMenus,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["medicalMenu"],
    queryFn: getMedicalMenu,
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

export default MedicalMenuPage;
