import { getDayMenu } from "@apis/index";
import { useQuery } from "@tanstack/react-query";

const useGetDayMenu = (location: string) => {
  return useQuery({
    queryKey: [location],
    queryFn: () => getDayMenu(location),
  });
};

export default useGetDayMenu;
