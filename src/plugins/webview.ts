/**
 * @ Author: Rongxis
 * @ Create Time: 2023-02-14 23:35:14
 * @ Modified by: Rongxis
 * @ Modified time: 2023-03-07 01:41:55
 * @ Description:
 */

import { waitBy } from '@/utils/wait_by'
import { isJSONString } from '@/utils/assert'
import { KmrExpose } from '@/@types/global'
export type Webview = {
  call: (funName: string, params?: any[]) => Promise<any>
  resize: (w: number, h: number) => void
  move: (x: number, y: number) => void
  open_modal: (name: string) => void
  getShared: (key?: string) => any
}

const webview = Object.create(null)
webview.call = async (funName: string, params?: any[]): Promise<any> => {
  try {
    await waitBy(() => !!window.pywebview)
    const fun = window.pywebview?.api[funName]
    console.log(`webview function "${funName}" has be calling by is! params: ${params?.toString()}`)
    fun?.apply(null, params || [])
  } catch (error) {
    console.log(error)
  }
}

webview.resize = (w: number, h: number) => {
  webview.call('resize', [w, h])
}

webview.move = (x: number, y: number) => {
  webview.call('move', [x, y])
}

webview.open_modal = (name: string) => {
  webview.call('open_modal', [name])
}

webview.expose = (name: keyof KmrExpose, value: any | Function) => {
  if (!window.__kmr__) {
    window.__kmr__ = {} as KmrExpose
  }
  window.__kmr__[name] = value
}

webview.getShared = (key?: string) => {
  try {
    let res: any = ''
    const store = window.sessionStorage || {}
    if (key) {
      res = store[key] || ''
      if (isJSONString(res)) {
        res = JSON.parse(res)
      }
    }
    return res
  } catch (error) {
    console.log(error)
  }
}

const plugin = {
  install (app: any) {
    app.config.globalProperties.$webview = webview
  }
}

export function loader (app: any) {
  app.use(plugin)
}

export default webview
