import { AxiosRequestTransformer, RawAxiosRequestHeaders } from "axios";
import axiosInstance from "./axiosInstance";
import { toast } from "../hooks/use-toast";

type RequestOptions = {
  showToast?: boolean;
  success?: string | ((data: any) => string);
  successTitle?: string;
  error?: string | ((error: any) => string);
  errorTitle?: string;
};

const handleToast = (
  showToast: boolean | undefined,
  message: string | ((data: any) => string) | undefined,
  data: any,
  variant: "default" | "destructive"
) => {
  if (showToast && message) {
    const title = typeof message === "function" ? message(data) : message;
    toast({ variant, title });
  }
};

const handleRequest = async (
  method: "get" | "post" | "put" | "patch" | "delete",
  path: string,
  data?: any,
  requestOptions?: Partial<RequestOptions>,
  options?: {
    headers?: RawAxiosRequestHeaders;
    transformRequest?: AxiosRequestTransformer;
  }
) => {
  const { showToast, success, error } = requestOptions || {};
  try {
    const res = await axiosInstance.request({
      method,
      url: path as string,
      data,
      headers: options?.headers,
      transformRequest: options?.transformRequest,
    });
    handleToast(showToast, success, res.data, "default");
    return res.data;
  } catch (err: any) {
    handleToast(showToast, error, err?.response?.data, "destructive");
    return Promise.reject({
      message: err?.response?.data?.message ?? err.response?.data?.detail ?? err?.response?.data?.error,
      status: err?.response?.status,
    });
  }
};

export const getData = (path: string, requestOptions?: Partial<RequestOptions>) =>
  handleRequest("get", path, undefined, requestOptions);

export const postData = (
  path: string,
  data?: any,
  requestOptions?: Partial<RequestOptions>,
  options?: {
    headers?: RawAxiosRequestHeaders;
    transformRequest?: AxiosRequestTransformer;
  }
) => handleRequest("post", path, data, requestOptions, options);

export const putData = (path: string, data?: any, requestOptions?: Partial<RequestOptions>) =>
  handleRequest("put", path, data, requestOptions);

export const patchData = (path: string, data?: any, requestOptions?: Partial<RequestOptions>) =>
  handleRequest("patch", path, data, requestOptions);

export const deleteData = (path: string, requestOptions?: Partial<RequestOptions>) =>
  handleRequest("delete", path, undefined, requestOptions);

const requestHelpers = {
  getData,
  postData,
  putData,
  deleteData,
  patchData,
};

export default requestHelpers;

