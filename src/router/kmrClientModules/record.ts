/**
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:29:21
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-14 21:41:15
 * @ Description:
 */
import { getClientDefaultRect } from '@/utils/cookies'
import { RouteRecordRaw } from 'vue-router'
const RecordRouter: Array<RouteRecordRaw> = [
  {
    path: '/record',
    name: 'Record',
    meta: {
      size: getClientDefaultRect()
    },
    component: () => import(/* webpackChunkName: "record" */'@/views/record/Index.vue')
  }
]
export default RecordRouter
