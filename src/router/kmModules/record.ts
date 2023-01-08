/**
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:29:21
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-08 01:31:27
 * @ Description:
 */
import { RouteRecordRaw } from 'vue-router'
const RecordRouter: Array<RouteRecordRaw> = [
  {
    path: '/record',
    name: 'Record',
    component: () => import(/* webpackChunkName: "record" */'@/views/record/Index.vue')
  }
]
export default RecordRouter
