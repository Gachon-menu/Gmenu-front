import { getTodayMenu } from "@apis/index";
import { useQuery } from "@tanstack/react-query";

const useGetTodayMenu = () => {
  return useQuery({
    queryKey: ["todayMenu"],
    queryFn: getTodayMenu,
  });
};

export default useGetTodayMenu;
