import request from "@/utils/request"

export function SetSysApply(data){
  return request({
    url:"/violation/apply",
    method:"POST",
    data
  })
}


