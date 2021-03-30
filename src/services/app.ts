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
