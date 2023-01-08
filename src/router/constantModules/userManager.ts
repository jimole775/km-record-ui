/*
 * @Description: 用户管理相关路由管理
 * @Author: Rongxis
 * @Date: 2020-12-10 16:12:54
 * @LastEditors: Rongxis
 * @LastEditTime: 2021-01-21 18:04:55
 */
import { RouteRecordRaw } from 'vue-router'
const UserManagerRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "userManager" */'@/views/user-manager/login/Index.vue')
  }
]
export default UserManagerRouter
