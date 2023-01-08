/**
 * @ Author: Rongxis
 * @ Create Time: 2023-01-07 17:03:24
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-08 02:13:50
 * @ Description:
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const constantFiles = require.context('./constantModules', true, /\.ts$/)
let constantModules: Array<RouteRecordRaw> = []
constantFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  constantModules = constantModules.concat(constantFiles(key).default)
})

const asyncFiles = require.context('./permissionModules', true, /\.ts$/)
let permissionModules: Array<RouteRecordRaw> = []
asyncFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  permissionModules = permissionModules.concat(asyncFiles(key).default)
})

const kmFiles = require.context('./kmModules', true, /\.ts$/)
let kmModules: Array<RouteRecordRaw> = []
kmFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  kmModules = kmModules.concat(kmFiles(key).default)
})

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/Index.vue')
      }
    ]
  },
  {
    path: '/home',
    component: Layout,
    children: [
      ...kmModules
    ]
  },
  ...constantModules
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  ...permissionModules
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
