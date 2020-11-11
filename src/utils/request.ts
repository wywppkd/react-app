/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
// import baseUrl from "./baseUrl";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  // 如果要使用Content-Type:application/x-www-form-urlencoded; 打开这里的注释即可
  // transformRequest: [
  //   function(data, headers) {
  //     return Qs.stringify(data);
  //   }
  // ]
});

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  (config) => {
    // config.withCredentials = false;
    // config.headers.Authorization = localStorage.getItem("token") || "TODO";
    return config;
  },
  (error) => Promise.reject(error),
);

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (res) => {
    return Promise.resolve(res.data);
  },
  // 请求失败
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * 约束request入参
 */
type RequestOption = {
  /**
   * 请求路径
   */
  url: string;
  /**
   * 请求参数
   */
  data?: any;
};

export default {
  get(option: RequestOption): Promise<any> {
    return instance({
      url: option.url,
      params: option.data,
    });
  },
  post(option: RequestOption): Promise<any> {
    return instance({
      method: 'POST',
      url: option.url,
      data: option.data,
    });
  },
  delete(option: RequestOption): Promise<any> {
    return instance({
      method: 'DELETE',
      url: option.url,
      data: option.data,
    });
  },
  put(option: RequestOption): Promise<any> {
    return instance({
      method: 'PUT',
      url: option.url,
      data: option.data,
    });
  },
  patch(option: RequestOption): Promise<any> {
    return instance({
      method: 'PATCH',
      url: option.url,
      data: option.data,
    });
  },
};
