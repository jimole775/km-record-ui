<!--
 * @Description: 导航栏
 * @Author: Rongxis
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-19 01:58:57
 * @LastEditTime: 2021-01-27 19:16:50
-->
<template>
  <NavBar>
    <template #title>
      <Logo />
    </template>
    <template #menu>
      <LangSelect />
    </template>
    <template #operation>
      <Minimize />
      <Close />
    </template>
  </NavBar>
</template>

<script lang="ts">
import LangSelect from '@/components/lang_select/Index.vue'
import Logo from '@/components/logo/Index.vue'
import NavBar from '@/components/nav-bar/Index.vue'
import Minimize from '@/components/minimize/Index.vue'
import Close from '@/components/close/Index.vue'

import { computed, reactive, toRefs } from 'vue'
import { useStore } from '@/store'
import { useI18n } from 'vue-i18n'
export default {
  components: {
    Logo,
    NavBar,
    Close,
    Minimize,
    LangSelect
  },
  setup() {
    const store = useStore()
    const { t } = useI18n()
    const device = computed(() => {
      return store.state.app.device.toString()
    })
    const state = reactive({
    })
    return {
      device,
      ...toRefs(state),
      t
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #25272E;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

  }
}
</style>
