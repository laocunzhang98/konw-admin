import request from "@/utils/request"

export function getArticleList(params){
  return request({
    url:"/classic/admin",
    method:"GET",
    params
  })
}
export function adminDeleteArticle(data){
  return request({
    url:"/classic/admindel",
    method:"DELETE",
    data
  })
}
