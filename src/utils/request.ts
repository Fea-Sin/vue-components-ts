import axios from "axios";
import vm from "@/main";

const HTTP_STATUS: any = {
  200: "服务器成功返回请求的数据",
  201: "新建或修改数据成功",
  202: "一个请求已经进入后台排队（异步任务）",
  204: "删除数据成功",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作",
  401: "用户没有权限（令牌、用户名、密码错误）",
  403: "用户得到授权，但是访问是被禁止的",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作",
  406: "请求的格式不可得",
  410: "请求的资源被永久删除，且不会再得到的",
  422: "当创建一个对象时，发生一个验证错误",
  500: "服务器发生错误，请检查服务器",
  502: "网关错误",
  503: "服务不可用，服务器暂时过载或维护",
  504: "网关超时",
};

const TOKEN =
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndW9rYWltYTNAY3JlZGl0ZWFzZS5jbiIsInNjb3BlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoiaHR0cDovL2FkeC5jcmVkaXRlYXNlLmNvbSIsImp0aSI6ImI4MzRjZTMzLTRkYmItNDkxZS1hMmI2LTk0ODZkY2UzMzE3MiIsImlhdCI6MTYxNzk0NzI2MywiZXhwIjoxNjE4MDMzNjYzfQ.MUPt08D4gYGfNTPM6co4QTJowTkvUDBSht7cssNNThhKxbcMAph6ECAHayBn1otEEjTbRNFzTRgk-78ENWm_ZQ";

const instanceManage = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API + "/datastar",
  // adxApi
  baseURL: "/adxApi",
});

instanceManage.interceptors.request.use(
  (config: any) => {
    config.headers["Authorization"] = TOKEN;

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

instanceManage.interceptors.response.use(
  (response: any) => {
    const data = response.data;
    return data;
  },
  (error: any) => {
    const message =
      error &&
      error.response &&
      ((error.response.data && error.response.data.message) ||
        HTTP_STATUS[error.response.status] ||
        "未知错误");
    error.message = message;
    vm.$Message.error(message);
    return Promise.reject(error);
  }
);

export default instanceManage;
