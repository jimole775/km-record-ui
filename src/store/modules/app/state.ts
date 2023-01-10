/*
 * @Description: app state
 * @Author: Rongxis
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: Rongxis
 * @LastEditTime: 2020-12-23 10:30:35
 */
import { getSidebarStatus, getSize, getRect } from '@/utils/cookies'
import { getLocale } from '@/locales'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface Rect {
  w?: number
  h?: number
  x?: number
  y?: number
}

export interface AppState {
  device: DeviceType
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  language: string
  size: string
  rect: Rect
}

export const state: AppState = {
  device: DeviceType.Desktop,
  sidebar: {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  },
  language: getLocale(),
  size: getSize() || 'medium',
  rect: getRect()
}
