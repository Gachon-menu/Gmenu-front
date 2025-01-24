import axiosInstance from "./axios-instance";

const getTodayMenu = async () => {
  try {
    const response = await axiosInstance.get("/menu/today");
    return response.data.result.todayMenus;
  } catch (e) {
    console.error(e);
  }
};

const getDormitoryMenu = async () => {
  try {
    const response = await axiosInstance.get("/menu/dormitory");
    return response.data.result.dayMenus;
  } catch (e) {
    console.error(e);
  }
};

const getArmMenu = async () => {
  try {
    const response = await axiosInstance.get("/menu/arm");
    return response.data.result.dayMenus;
  } catch (e) {
    console.error(e);
  }
};

const getVisionMenu = async () => {
  try {
    const response = await axiosInstance.get("/menu/visiontower");
    return response.data.result.dayMenus;
  } catch (e) {
    console.error(e);
  }
};

export { getTodayMenu, getDormitoryMenu, getArmMenu, getVisionMenu };
