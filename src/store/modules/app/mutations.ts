/*
 * @Description: app Mutations
 * @Author: Rongxis
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: Rongxis
 * @LastEditTime: 2020-12-24 09:55:30
 */
import { MutationTree } from 'vuex'
import { AppState, DeviceType, Rect } from './state'
import { AppMutationTypes } from './mutation-types'
import { setSidebarStatus, setLanguage, setSize, setRect } from '@/utils/cookies'

export type Mutations<S = AppState> = {
  [AppMutationTypes.TOGGLE_SIDEBAR](state: S, withoutAnimation: boolean): void
  [AppMutationTypes.CLOSE_SIDEBAR](state: S, withoutAnimation: boolean): void
  [AppMutationTypes.TOGGLE_DEVICE](state: S, device: DeviceType): void
  [AppMutationTypes.SET_LANGUAGE](state: S, language: string): void
  [AppMutationTypes.SET_SIZE](state: S, size: string): void
  [AppMutationTypes.SET_RECT](state: S, rect: Rect): void
}

export const mutations: MutationTree<AppState> & Mutations = {
  [AppMutationTypes.TOGGLE_SIDEBAR](state: AppState, withoutAnimation: boolean) {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = withoutAnimation
    if (state.sidebar.opened) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  },

  [AppMutationTypes.CLOSE_SIDEBAR](state: AppState, withoutAnimation: boolean) {
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  },

  [AppMutationTypes.TOGGLE_DEVICE](state: AppState, device: DeviceType) {
    state.device = device
  },

  [AppMutationTypes.SET_LANGUAGE](state: AppState, language: string) {
    state.language = language
    setLanguage(state.language)
  },

  [AppMutationTypes.SET_SIZE](state: AppState, size: string) {
    state.size = size
    setSize(state.size)
  },

  [AppMutationTypes.SET_RECT](state: AppState, rect: Rect) {
    state.rect = rect
    setRect(state.rect)
  }

}