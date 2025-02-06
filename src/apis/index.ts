import { BaseResponse } from "types/base";
import axiosInstance from "./axios-instance";
import { DayMenusResponse, TodayMenusResponse } from "types/response";

const getTodayMenu = async (): Promise<BaseResponse<TodayMenusResponse>> => {
  try {
    const response = await axiosInstance.get<BaseResponse<TodayMenusResponse>>(
      "/menu/today"
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getDayMenu = async (
  location: string
): Promise<BaseResponse<DayMenusResponse>> => {
  try {
    const response = await axiosInstance.get<BaseResponse<DayMenusResponse>>(
      `/menu/${location}`
    );
    return response.data;
  } catch (e) {
    console.error(e);

    throw e;
  }
};

export { getTodayMenu, getDayMenu };
