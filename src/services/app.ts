import { stringify } from "qs";
import request from "@/utils/request";

// post query
export async function queryApiPostMethod(params: any) {
  return request({
    method: "post",
    url: "/expression/check",
    data: params,
  });
}
// get query
export async function queryApiGetMethod(params: any) {
  return request({
    method: "get",
    url: `/dataSource/vague/listJson?${stringify(params)}`,
  });
}

// json parse
export async function queryFormatJson(params: any) {
  console.log("service----请求", params);
  return request({
    method: "post",
    url: "/dataworks/parseJson/format/json",
    data: params,
  });
}
