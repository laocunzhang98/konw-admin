import request from "@/utils/request"


export function getArticleNumber(params){
  return request({
    url:"/classic/statistics",
    method:"GET",
    params
  })
}
export function getFileNumber(params){
  return request({
    url:"/download/dayfile",
    method:"GET",
    params
  })
}