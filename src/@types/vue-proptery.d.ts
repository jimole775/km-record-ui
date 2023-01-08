/*
 * @Description:
 * @Author: Rongxis
 * @Date: 2020-12-25 09:50:16
 * @LastEditors: Rongxis
 * @LastEditTime: 2020-12-30 11:23:35
 */
import { ElMessage } from 'element-plus'
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $message: ElMessage
    }
  }

  declare module 'vue-router' {
    interface RouteMeta {
      roles?: string[]
    }
}
