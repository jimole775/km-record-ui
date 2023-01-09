import { Rect } from '@/store/modules/app/state'
import { call } from '@/plugins/platform'
import { isValuable } from './assert'
export default (rect: Rect) => {
  const body = window.document.body
  const { w, h, x, y } = rect
  if (isValuable(w) && isValuable(h)) {
    body.style.width = w + 'px'
    body.style.height = h + 'px'
    call('set_size', [`width=${w}`, `height=${h}`])
  } else {
    if (isValuable(w)) {
      body.style.width = w + 'px'
      call('set_size', [`width=${w}`])
    }
    if (isValuable(h)) {
      body.style.height = h + 'px'
      call('set_size', [`height=${h}`])
    }
  }
  if (isValuable(x) && isValuable(y)) {
    call('set_size', [`x=${x}`, `y=${y}`])
  } else {
    if (isValuable(x)) {
      call('set_size', [`x=${x}`])
    }
    if (isValuable(y)) {
      call('set_size', [`y=${y}`])
    }
  }
}
