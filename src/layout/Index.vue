<!--
 * @Description: app 布局入口
 * @Author: Rongxis
 * @Date: 2020-12-17 15:32:33
 * @LastEditors: Rongxis
 * @LastEditTime: 2021-04-06 14:47:00
-->
<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <!-- <div
      v-if="classObj.mobile && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    /> -->
    <!-- <Sidebar class="sidebar-container" /> -->
    <div class="main-container">
      <!-- <div :class="{'fixed-header': fixedHeader}">
        <TagsView v-if="showTagsView" />
      </div> -->
      <Navbar />
      <AppMain />
      <!-- <RightPanel v-if="showSettings">
        <Settings />
      </RightPanel> -->
    </div>
    <div v-show="freezing" class="kmr-cover" />
  </div>
</template>

<script lang="ts">
import { DeviceType } from '@/store/modules/app/state'
import { computed, defineComponent, onBeforeMount, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import { AppActionTypes } from '@/store/modules/app/action-types'
import { AppMain, Navbar } from './components'
// import RightPanel from '@/components/right_panel/Index.vue'
import resize from './resize'
export default defineComponent({
  name: 'Layout',
  components: {
    AppMain,
    Navbar
  },
  setup() {
    const { t } = useI18n()
    const store = useStore()
    const { device, addEventListenerOnResize, resizeMounted, removeEventListenerResize, watchRouter } = resize()
    const state = reactive({
      handleClickOutside: () => {
        store.dispatch(AppActionTypes.ACTION_CLOSE_SIDEBAR, false)
      }
    })

    const classObj = computed(() => {
      return {
        mobile: device.value === DeviceType.Mobile
      }
    })
    // const showSettings = computed(() => {
    //   return store.state.settings.showSettings
    // })
    // const showTagsView = computed(() => {
    //   return store.state.settings.showTagsView
    // })
    const fixedHeader = computed(() => {
      return store.state.settings.fixedHeader
    })

    const freezing = computed(() => {
      return store.state.kmr.client.freezing
    })

    watchRouter()
    onBeforeMount(() => {
      addEventListenerOnResize()
    })

    onMounted(() => {
      resizeMounted()
    })

    onBeforeUnmount(() => {
      removeEventListenerResize()
    })

    return {
      t,
      classObj,
      freezing,
      // sidebar,
      // showSettings,
      // showTagsView,
      fixedHeader,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  background-color: $dark;
  color: $defaultTextColor;
  height: inherit;
}

// .drawer-bg {
//   background: #000;
//   opacity: 0.3;
//   width: 100%;
//   top: 0;
//   height: 100%;
//   position: absolute;
//   z-index: 999;
// }

.main-container {
  min-height: 100%;
  transition: margin-left .28s;
  position: relative;
  height: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  transition: width 0.28s;
}

.mobile {
  .main-container {
    margin-left: 0px;
  }
  .fixed-header {
    width: 100%;
  }
}

.kmr-cover {
  text-align: center;
  z-index: 99999;
  background-color: rgba(0,0,0,0);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
