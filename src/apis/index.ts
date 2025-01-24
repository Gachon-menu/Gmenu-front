import axiosInstance from "./axios-instance";

const getTodayMenu = async () => {
  try {
    const response = await axiosInstance.get("/menu/today");
    return response.data.result.todayMenus;
  } catch (e) {
    console.error(e);
  }
};

export { getTodayMenu };
