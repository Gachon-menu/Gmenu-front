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

const getDormitoryMenu = async (): Promise<BaseResponse<DayMenusResponse>> => {
  try {
    const response = await axiosInstance.get<BaseResponse<DayMenusResponse>>(
      "/menu/dormitory"
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getArmMenu = async (): Promise<BaseResponse<DayMenusResponse>> => {
  try {
    const response = await axiosInstance.get<BaseResponse<DayMenusResponse>>(
      "/menu/arm"
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getVisionMenu = async (): Promise<BaseResponse<DayMenusResponse>> => {
  try {
    const response = await axiosInstance.get<BaseResponse<DayMenusResponse>>(
      "/menu/visiontower"
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getMedicalMenu = async (): Promise<BaseResponse<DayMenusResponse>> => {
  try {
    const response = await axiosInstance.get<BaseResponse<DayMenusResponse>>(
      "/menu/medical"
    );
    return response.data;
  } catch (e) {
    console.error(e);

    throw e;
  }
};

export {
  getTodayMenu,
  getDormitoryMenu,
  getArmMenu,
  getVisionMenu,
  getMedicalMenu,
};
