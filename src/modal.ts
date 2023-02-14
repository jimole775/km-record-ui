/*
 * @Description:
 * @Autor: Rongxis
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: Rongxis
 * @LastEditTime: 2021-01-27 19:20:07
 */
import App from './App.vue'
import router from './router'
import { store } from './store'
import { createApp } from 'vue'
import { kmrModalRouter } from './router'
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'
import { loadAllPlugins } from './plugins'
import webview from '@/plugins/webview'

// 暴露 store 和 kmrModalRouter 到全局环境
webview.expose('store', store)
webview.expose('router', kmrModalRouter)

const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)

app.use(store).use(kmrModalRouter).mount('#app')
