/*
 * @Description: st
 * @Author: Rongxis
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: Rongxis
 * @LastEditTime: 2021-01-08 20:46:07
 */
import { createStore, createLogger } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import { store as app, AppStore, AppState } from '@/store/modules/app'
import { store as kmr, KmrStore, KmrState } from '@/store/modules/kmr'
import { store as settings, SettingStore, SettingsState } from '@/store/modules/settings'
// import { store as permission, PermissionStore, PermissionState } from '@/store/modules/permission'
// import { store as user, UserStore, UserState } from '@/store/modules/user'
// import { store as tagViews, TagsStore, TagsViewState } from '@/store/modules/tagsview'

export interface RootState {
    app: AppState
    kmr: KmrState
    settings: SettingsState
    // permission: PermissionState
    // user: UserState
    // tagViews: TagsViewState
}

export type Store = AppStore<Pick<RootState, 'app'>>
& SettingStore<Pick<RootState, 'settings'>>
& KmrStore<Pick<RootState, 'kmr'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
  plugins,
  modules: {
    app,
    kmr,
    settings,
    // permission,
    // user,
    // tagViews
  }
})

export function useStore(): Store {
  return store as Store
}
