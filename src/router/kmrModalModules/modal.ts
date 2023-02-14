/**
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:29:21
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-14 21:40:14
 * @ Description:
 */
import { RouteRecordRaw } from 'vue-router'
const KMRouter: Array<RouteRecordRaw> = [
  {
    path: '/hotkey-config',
    name: 'HotkeyConfig',
    component: () => import(/* webpackChunkName: "home" */'@/modals/HotkeyConfig.vue')
  }
]
export default KMRouter
