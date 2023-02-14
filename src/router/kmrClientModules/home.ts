/**
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:29:21
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-08 13:27:50
 * @ Description:
 */
import { RouteRecordRaw } from 'vue-router'
const KMRouter: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */'@/views/home/Index.vue')
  }
]
export default KMRouter
