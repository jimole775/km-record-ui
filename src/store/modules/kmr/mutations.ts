/**
 * @Description: app Mutations
 * @Author: Rongxis
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: Rongxis
 * @LastEditTime: 2020-12-24 09:55:30
 */
import { MutationTree } from 'vuex'
import { Coordinate, KmrState, RecState, Rect } from './state'
import { KmrMutationTypes } from './mutation-types'

// SET_MODAL_RECT = 'SET_MODAL_RECT',
// SET_CLIENT_RECT = 'SET_CLIENT_RECT',
// SET_RECORD_STEP = 'SET_RECORD_STEP',
// SET_RECORD_STATE = 'SET_RECORD_STATE',
// SET_RECORD_HIT_SELF = 'SET_RECORD_HIT_SELF',
// SET_CLIENT_FREEZING = 'SET_CLIENT_FREEZING',
export type Mutations<S = KmrState> = {
  [KmrMutationTypes.SET_CLIENT_RECT](state: S, rect: Rect): void
  [KmrMutationTypes.SET_MODAL_RECT](state: S, rect: Rect): void
  [KmrMutationTypes.SET_RECORD_STATE](state: S, recState: RecState): void
  [KmrMutationTypes.SET_RECORD_HIT_SELF](state: S, coord: Coordinate): void
  [KmrMutationTypes.SET_CLIENT_FREEZING](state: S, flag: boolean): void
  [KmrMutationTypes.SET_RECORD_STEP](state: S, step: number): void
}

export const mutations: MutationTree<KmrState> & Mutations = {
  [KmrMutationTypes.SET_CLIENT_RECT](state: KmrState, rect: Rect) {
    state.client.rect = { ...state.client.rect, ...rect }
  },

  [KmrMutationTypes.SET_MODAL_RECT](state: KmrState, rect: Rect) {
    state.modal.rect = { ...state.modal.rect, ...rect }
  },

  [KmrMutationTypes.SET_RECORD_STATE](state: KmrState, recState: RecState) {
    state.record.state = { ...state.record.state, ...recState }
  },

  [KmrMutationTypes.SET_RECORD_HIT_SELF](state: KmrState, coord: Coordinate) {
    state.record.hitself.push(coord)
  },

  [KmrMutationTypes.SET_CLIENT_FREEZING](state: KmrState, flag: boolean) {
    state.client.freezing = flag
  },

  [KmrMutationTypes.SET_RECORD_STEP](state: KmrState, step: number) {
    state.record.step = step
  }

}
