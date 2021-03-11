import request from "@/utils/request"

export function getUserList(params){
  return request({
    url:"/user/admin",
    method:"GET",
    params
  })
}