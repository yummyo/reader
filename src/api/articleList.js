import axios from './config'
import {URLROUTER,} from './config'

function axiosConfig(config){
  return axios({
    method: config.method || 'POST',
    url: config.url ,
    data: config.data || '',
    headers : config.headers || '',
  }).then((res)=>{
    return Promise.resolve(res.data)
  }).catch((error)=>{
    return Promise.resolve(error)
  })
}
// *****************************主页********************************************
// 课程列表
export  function getCourseList(config){
  const url='/apis/getCourseList'
  return axiosConfig(Object.assign({url},config))
}
// 分类列表
export  function getCategoryList(config){
  const url='/apis/getCategoryList'
  return axiosConfig(Object.assign({url},config))
}
// export  function getListContent(config){
//   const url='/api/getListContent'
//   return axiosConfig(Object.assign({url},config))
// }
