/**
 * @ Author: Rongxis
 * @ Create Time: 2023-02-14 00:03:46
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-14 01:26:58
 * @ Description:
 */
import webview from '@/plugins/webview'
import { useStore } from '@/store'
import { Rect } from '@/store/modules/kmr/state'
import { getClientDefaultRect } from '@/utils/cookies'
import { KmrActionTypes } from '@/store/modules/kmr/action-types'

const store = useStore()

let doc: HTMLElement
export function setWH (size: Rect) {
  if (!doc) {
    doc = document.documentElement
  }
  const rect = store.state.kmr.client.rect
  const { w = rect.w, h = rect.h } = size
  store.dispatch(KmrActionTypes.ACTION_SET_CLIENT_RECT, { w, h })
  doc.style.width = w + 'px'
  doc.style.height = h + 'px'
  webview.call('resize', [w, h])
}

export function getWH (): Rect {
  const rect = store.state.kmr.client.rect
  return {
    w: rect.w,
    h: rect.h
  }
}

export function resetWH () {
  setWH(getClientDefaultRect())
}

export function moveto (coord: Rect) {
  const rect = store.state.kmr.client.rect
  const { x = rect.x, y = rect.y } = coord
  store.dispatch(KmrActionTypes.ACTION_SET_CLIENT_RECT, { x, y })
  webview.call('move', [x, y])
}
