/**
 * @ Author: Rongxis
 * @ Create Time: 2023-01-09 22:38:49
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-10 22:27:36
 * @ Description:
 */

import { Rect } from '@/store/modules/app/state'
import { call } from '@/plugins/platform'
import { isValuable } from './assert'
import { useStore } from '@/store'
import { AppActionTypes } from '@/store/modules/app/action-types'
export default (rect: Rect) => {
  const { w, h, x, y } = rect
  let callParams: any[] = []
  let dispatchParams: Rect = {}
  if (isValuable(w) && isValuable(h)) {
    dispatchParams = { w, h }
    callParams = [`width=${w}`, `height=${h}`]
  } else {
    if (isValuable(w)) {
      dispatchParams = { w }
      callParams = [`width=${w}`]
    }
    if (isValuable(h)) {
      dispatchParams = { h }
      callParams = [`height=${h}`]
    }
  }
  if (isValuable(x) && isValuable(y)) {
    dispatchParams = { x, y }
    callParams = [`x=${x}`, `y=${y}`]
  } else {
    if (isValuable(x)) {
      dispatchParams = { x }
      callParams = [`x=${x}`]
    }
    if (isValuable(y)) {
      dispatchParams = { y }
      callParams = [`y=${y}`]
    }
  }
  call('set_size', callParams)
  useStore().dispatch(AppActionTypes.ACTION_SET_RECT, dispatchParams)
}
