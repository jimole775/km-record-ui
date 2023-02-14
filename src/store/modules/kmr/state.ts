/**
 * @Description: app state
 * @Author: Rongxis
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: Rongxis
 * @LastEditTime: 2020-12-23 10:30:35
 */
import { getClientDefaultRect, getModalDefaultRect } from '@/utils/cookies'

// 记录当前UI的四维 x: x轴位置，y: y轴位置， w: 宽度，h: 高度
export type Rect = {
  x?: number
  y?: number
  w?: number
  h?: number
}

// 鼠标点击html时，需要记录点击的位置在屏幕中的坐标
export type Coordinate = {
  x: number
  y: number
}

// 记录工作开始时，保持对工作状态的监听
export type RecState = {
  idle: boolean
  paused: boolean
  working: boolean
}

export type KmrState = {
  record: {
    step: number
    state: RecState
    hitself: Coordinate[]
  },
  client: {
    freezing: boolean
    rect: Rect
  },
  modal: {
    rect: Rect
  }
}

export const state: KmrState = {
  record: {
    state: {
      idle: true,
      working: false,
      paused: false,
    },
    hitself: [],
    step: 0
  },
  client: {
    freezing: false,
    rect: getClientDefaultRect()
  },
  modal: {
    rect: getModalDefaultRect()
  }
}
