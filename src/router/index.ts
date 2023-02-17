/**
 * @ Author: Rongxis
 * @ Create Time: 2023-01-07 17:03:24
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-18 00:32:24
 * @ Description:
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'
import ModalWrapper from '@/modals/Index.vue'

// const constantFiles = require.context('./constantModules', true, /\.ts$/)
// let constantModules: Array<RouteRecordRaw> = []
// constantFiles.keys().forEach((key) => {
//   if (key === './index.ts') return
//   constantModules = constantModules.concat(constantFiles(key).default)
// })

// const asyncFiles = require.context('./permissionModules', true, /\.ts$/)
// let permissionModules: Array<RouteRecordRaw> = []
// asyncFiles.keys().forEach((key) => {
//   if (key === './index.ts') return
//   permissionModules = permissionModules.concat(asyncFiles(key).default)
// })

const kmrModalFiles = require.context('./kmrModalModules', true, /\.ts$/)
let kmrModalModules: Array<RouteRecordRaw> = []
kmrModalFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  kmrModalModules = kmrModalModules.concat(kmrModalFiles(key).default)
})

const kmrClientFiles = require.context('./kmrClientModules', true, /\.ts$/)
let kmrClientModules: Array<RouteRecordRaw> = []
kmrClientFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  kmrClientModules = kmrClientModules.concat(kmrClientFiles(key).default)
})

export const kmrClientRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      ...kmrClientModules
    ]
  }
]

export const kmrModalRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/modal'
  },
  {
    path: '/modal',
    component: ModalWrapper,
    children: [
      ...kmrModalModules
    ]
  }
]

// export const asyncRoutes: Array<RouteRecordRaw> = [
//   ...permissionModules
// ]
export const kmrClientRouter = createRouter({
  history: createWebHistory(),
  routes: kmrClientRoutes
})

export const kmrModalRouter = createRouter({
  history: createWebHistory(),
  routes: kmrModalRoutes
})

export function resetRouter() {
  const newClientRouter = kmrClientRouter
  const newModalRouter = kmrModalRouter
  ;(kmrClientRouter as any).matcher = (newClientRouter as any).matcher // reset router
  ;(kmrModalRouter as any).matcher = (newModalRouter as any).matcher // reset router
}
