import { get, post, deletes, getBaseURL } from './request'

const HttpManager = {

  getCard:()=>get('card/1'),
  //获取所有课程信息
  getAllCourse: () => get(`course`),
  //获取所有竞赛信息
  getuser: () => get(`users`),
  //获取商品分类
  getClassify: () => get(`classify`),
  //获取对应商品列表
  login:(data={})=>post('login')
}

export { HttpManager }
