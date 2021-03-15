import request from "@/utils/request"

export function getUserList(params){
  return request({
    url:"/user/admin",
    method:"GET",
    params
  })
}
export function getManagerList(params){
  return request({
    url:"/user/manager",
    method:"GET",
    params
  })
}
export function getUserInfo(params){
  return request({
    url:"/user/admin/info",
    method:"GET",
    params
  })
}
export function updateUserInfo(data){
  return request({
    url:"/user/admin/upinfo",
    method:"POST",
    data
  })
}
export function modifyUserLimit(data){
  return request({
    url:"/user/admin/limit",
    method:"POST",
    data
  })
}
export function handleViolation(data){
  return request({
    url:"/violation/add",
    method:"POST",
    data
  })
}
export function handleViolationTime(data){
  return request({
    url:"/user/admin/ban",
    method:"POST",
    data
  })
}