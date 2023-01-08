/*
 * @Description: i18n国际化
 * @Author: Rongxis
 * @Date: 2020-12-19 11:53:48
 * @LastEditors: Rongxis
 * @LastEditTime: 2020-12-23 10:08:34
 */
import i18n from '@/locales'
export default function loadComponent(app: any) {
  app.use(i18n)
}
