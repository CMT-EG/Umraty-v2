import { AxiosRequestTransformer, RawAxiosRequestHeaders } from "axios";
import axiosInstance from "./axiosInstance";
import { toast } from "react-toastify";

type RequestOptions = {
  showToast: boolean;
  success: string | ((data: any) => any);
  successTitle: string;
  error: string | ((error: any) => any);
  errorTitle: string;
};

const getData = async (
  path: string,
  requestOptions?: Partial<RequestOptions>
) => {
  const { showToast, success, error } = requestOptions || {};
  return await axiosInstance
    .get(path)
    .then((res) => {
      if (showToast) {
        if (success) {
          if (success instanceof Function) {
            toast.success(success(res.data));
          } else toast.success(success);
        }
      }
      return res.data;
    })
    .catch((err) => {
      if (showToast) {
        if (error) {
          if (error instanceof Function) {
            toast.error(error(err?.response?.data));
          } else toast.error(error);
        }
      }
      return Promise.reject({
        message: err?.response?.data.message,
        status: err?.response?.status,
      });
    });
};

export async function postData(
  path: string,
  data?: any,
  requestOptions?: Partial<RequestOptions>,
  options?: {
    headers?: RawAxiosRequestHeaders;
    transformRequest?: AxiosRequestTransformer;
  }
) {
  const { showToast, success, error } = requestOptions || {};
  return await axiosInstance
    .post(path, data, {
      headers: options?.headers,
      transformRequest: options?.transformRequest,
    })
    .then((res) => {
      console.log("response from toast");
      if (showToast) {
        if (success) {
          if (success instanceof Function) {
            toast.success(success(res.data));
          } else toast.success(success);
        }
      }
      return res;
    })
    .catch((err) => {
      console.log("CATCH ERROR", err?.response);
      if (error) {
        if (error instanceof Function) {
          toast.error(error(err?.response?.data));
        } else toast.error(error);
      }
      return Promise.reject({
        message:
          err?.response?.data?.message ??
          err.response?.data?.detail ??
          err?.response?.data?.error,
      });
    });
}

export async function putData(
  path: string,
  data?: any,
  requestOptions?: Partial<RequestOptions>
) {
  const { showToast, success, error } = requestOptions || {};
  return await axiosInstance
    .put(path, data)
    .then((res) => {
      if (showToast) {
        if (success) {
          if (success instanceof Function) {
            toast.success(success(res.data));
          } else toast.success(success);
        }
      }
      return res;
    })
    .catch((err) => {
      console.log(err?.response);
      if (error) {
        if (error instanceof Function) {
          toast.error(error(err?.response?.data));
        } else toast.error(error);
      }
      return Promise.reject({
        message: err?.response?.data?.message ?? err.response?.data?.detail,
        status: err?.response?.status,
      });
    });
}

export async function patchData(
  path: string,
  data?: any,
  requestOptions?: Partial<RequestOptions>
) {
  const { showToast, success, error } = requestOptions || {};
  return await axiosInstance
    .patch(path, data)
    .then((res) => {
      if (showToast) {
        if (success) {
          if (success instanceof Function) {
            toast.success(success(res.data));
          } else toast.success(success);
        }
      }
      return res;
    })
    .catch((err) => {
      console.log(err?.response);
      if (error) {
        if (error instanceof Function) {
          toast.error(error(err?.response?.data));
        } else toast.error(error);
      }
      return Promise.reject({
        message: err?.response?.data?.message ?? err.response?.data?.detail,
        status: err?.response?.status,
      });
    });
}

export async function deleteData(
  path: string,
  requestOptions?: Partial<RequestOptions>
) {
  const { showToast, success, error } = requestOptions || {};
  return await axiosInstance
    .delete(path)
    .then((res) => {
      if (showToast) {
        if (success) {
          if (success instanceof Function) {
            toast.success(success(res.data));
          } else toast.success(success);
        }
      }
      return res;
    })
    .catch((err) => {
      if (error) {
        if (error instanceof Function) {
          console.log("error from toast", err);
          toast.error(error(err?.response?.data));
        } else toast.error(error);
      }
      return Promise.reject({
        message: err?.response?.data?.message ?? err.response?.data?.detail,
        status: err?.response?.status,
      });
    });
}

const requestHelpers = {
  getData,
  postData,
  putData,
  deleteData,
  patchData,
};

export default requestHelpers;
