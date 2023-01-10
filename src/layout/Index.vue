<!--
 * @Description: app 布局入口
 * @Author: Rongxis
 * @Date: 2020-12-17 15:32:33
 * @LastEditors: Rongxis
 * @LastEditTime: 2021-04-06 14:47:00
-->
<template>
  <div
    class="app-wrapper"
    :class="classObj"
    :style="{width: rect.w + 'px', height: rect.h + 'px'}"
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
    const rect = computed(() => {
      return store.state.app.rect
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
      rect,
      classObj,
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

</style>
