export interface BaseResponse<T> {
  code: string;
  message: string;
  result: T;
  success: boolean;
  timestamp: string;
}
