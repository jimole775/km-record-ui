/*
 * @Description: 加载插件文件
 * @Author: Rongxis
 * @Date: 2020-12-19 11:53:00
 * @LastEditors: Rongxis
 * @LastEditTime: 2020-12-23 16:49:30
 */
import { createApp } from 'vue'

/**
 * @description 加载所有 Plugins
 * @param  {ReturnType<typeofcreateApp>} app 整个应用的实例
 */
export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  const files = require.context('.', true, /\.ts$/)
  files.keys().forEach(key => {
    if (typeof files(key).loader === 'function') {
      if (key !== './index.ts') files(key).loader(app)
    }
  })
}
