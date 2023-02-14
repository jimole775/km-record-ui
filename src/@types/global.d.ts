/**
 * @ Author: Rongxis
 * @ Create Time: 2023-02-13 21:54:12
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-15 00:00:50
 * @ Description:
 */

type NormalKeyValue = {
  [key: string]: any
}

type FunctionKeyValue = {
  [key: string]: Function
}

export type KmrExpose = {
  methods: FunctionKeyValue
  store: NormalKeyValue
  router: NormalKeyValue
}

declare global {
  interface Window {
    pywebview?: {
      api: NormalKeyValue
    },
    __kmr__: KmrExpose
  }
}

export {}
