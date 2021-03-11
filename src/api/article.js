import request from "@/utils/request"
export function getArticleList(params){
  return request({
    url:"/classic/admin",
    method:"GET",
    params
  })
}