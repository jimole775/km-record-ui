/*
 * @Description:
 * @Autor: Rongxis
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: Rongxis
 * @LastEditTime: 2021-01-27 19:20:07
 */
import App from './App.vue'
// import './pwa/registerServiceWorker'
import { kmrClientRouter } from './router'
import { store } from './store'
import VXETable from 'vxe-table'
import { createApp, Directive } from 'vue'
import 'vxe-table/lib/style.css'
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'
import 'normalize.css'
import { loadAllPlugins } from './plugins'
import * as directives from '@/directives'
import webview from './plugins/webview'

webview.expose('store', store)
webview.expose('router', kmrClientRouter)
webview.call('init_modal')
const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)

console.log(process.env.VUE_APP_BASE_API)

// 自定义指令
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string ]: Directive })[key])
})

app.use(store).use(kmrClientRouter).use(VXETable).mount('#app')
