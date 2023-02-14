/*
 * @Description: cookies封装
 * @Author: Rongxis
 * @Date: 2020-12-17 16:06:33
 * @LastEditors: Rongxis
 * @LastEditTime: 2020-12-17 17:23:14
 */
import Cookies from 'js-cookie'
import Keys from '@/constant/key'
import { Rect } from '@/store/modules/kmr/state'

export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(Keys.sidebarStatusKey, sidebarStatus)

export const getLanguage = () => Cookies.get(Keys.languageKey)
export const setLanguage = (language: string) => Cookies.set(Keys.languageKey, language)

export const getSize = () => Cookies.get(Keys.sizeKey)
export const setSize = (size: string) => Cookies.set(Keys.sizeKey, size)

export const setClientRect = (rect: Rect) => Cookies.set(Keys.clientRectKey, rect || '')
export const getClientRect = () => {
  const val = Cookies.get(Keys.clientRectKey) || '{}'
  return JSON.parse(val)
}

export const setModalDefaultRect = (rect: Rect) => Cookies.set(Keys.modalDefaultRectKey, rect || '')
export const getModalDefaultRect = () => {
  const val = Cookies.get(Keys.modalDefaultRectKey) || '{}'
  return JSON.parse(val)
}

export const setClientDefaultRect = (rect: Rect) => Cookies.set(Keys.clientDefaultRectKey, rect || '')
export const getClientDefaultRect = () => {
  const val = Cookies.get(Keys.clientDefaultRectKey) || '{}'
  return JSON.parse(val)
}

export const getToken = () => Cookies.get(Keys.tokenKey)
export const setToken = (token: string) => Cookies.set(Keys.tokenKey, token)
export const removeToken = () => Cookies.remove(Keys.tokenKey)
