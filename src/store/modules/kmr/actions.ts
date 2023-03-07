/*
 * @Description: app actions
 * @Author: Rongxis
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: Rongxis
 * @LastEditTime: 2020-12-23 14:29:18
 */
import { ActionTree, ActionContext } from 'vuex'
import { isNumber } from '@/utils/assert'
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store'
import { KmrState, Coordinate, Rect } from './state'
import { Mutations } from './mutations'
import { KmrMutationTypes } from './mutation-types'
import { KmrActionTypes } from './action-types'
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<KmrState, RootState>, 'commit'>
export interface Actions {
  [KmrActionTypes.ACTION_SET_CLIENT_RECT](
    { commit }: AugmentedActionContext,
    rect: Rect
  ): void
  [KmrActionTypes.ACTION_SET_CLIENT_FREEZING](
    { commit }: AugmentedActionContext,
    flag: boolean
  ): void
  [KmrActionTypes.ACTION_SET_MODAL_RECT](
    { commit }: AugmentedActionContext,
    rect: Rect
  ): void
  [KmrActionTypes.ACTION_SET_RECORD_START](
    { commit }: AugmentedActionContext
  ): void
  [KmrActionTypes.ACTION_SET_RECORD_PAUSE](
    { commit }: AugmentedActionContext
  ): void
  [KmrActionTypes.ACTION_SET_RECORD_STOP](
    { commit }: AugmentedActionContext
  ): void
  [KmrActionTypes.ACTION_SET_RECORD_STEP](
    { commit }: AugmentedActionContext,
    step: number
  ): void
  [KmrActionTypes.ACTION_ADD_RECORD_HIT_SELF](
    { commit }: AugmentedActionContext,
    coord: Coordinate
  ): void
}

export const actions: ActionTree<KmrState, RootState> & Actions = {
  [KmrActionTypes.ACTION_SET_CLIENT_RECT]({ commit }, rect: Rect) {
    const assertRes = Object.entries(rect).map((item) => isNumber(item[1]))
    if (assertRes.includes(false)) return console.log('action ACTION_SET_CLIENT_RECT is not accept to saved!')
    commit(KmrMutationTypes.SET_CLIENT_RECT, rect)
  },
  [KmrActionTypes.ACTION_SET_MODAL_RECT]({ commit }, rect: Rect) {
    commit(KmrMutationTypes.SET_MODAL_RECT, rect)
  },
  [KmrActionTypes.ACTION_SET_RECORD_START]({ commit }) {
    commit(KmrMutationTypes.SET_RECORD_STATE, {
      idle: false,
      working: true,
      paused: false
    })
  },
  [KmrActionTypes.ACTION_SET_RECORD_PAUSE]({ commit }) {
    commit(KmrMutationTypes.SET_RECORD_STATE, {
      idle: false,
      working: false,
      paused: true
    })
  },
  [KmrActionTypes.ACTION_SET_RECORD_STOP]({ commit }) {
    commit(KmrMutationTypes.SET_RECORD_STATE, {
      idle: true,
      working: false,
      paused: false
    })
  },
  [KmrActionTypes.ACTION_ADD_RECORD_HIT_SELF]({ commit }, coord: Coordinate) {
    commit(KmrMutationTypes.ADD_RECORD_HIT_SELF, coord)
  },
  [KmrActionTypes.ACTION_SET_CLIENT_FREEZING]({ commit }, flag: boolean) {
    commit(KmrMutationTypes.SET_CLIENT_FREEZING, flag)
  },
  [KmrActionTypes.ACTION_SET_RECORD_STEP]({ commit }, step: number) {
    commit(KmrMutationTypes.SET_RECORD_STEP, step)
  }
}
