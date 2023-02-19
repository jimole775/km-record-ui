<!--
 * @Description: 导航栏
 * @Author: Rongxis
 * @Date: 2020-12-17 15:52:19
 * @LastEditors: Rongxis
 * @LastEditTime: 2021-01-27 19:16:50
-->
<template>
  <NavBar>
    <template #title>
      <span>弹窗</span>
    </template>
    <template #operation>
      <Hide />
    </template>
  </NavBar>
</template>

<script lang="ts">
import Hide from '@/components/hide/Index.vue'
import NavBar from '@/components/nav-bar/Index.vue'
export default {
  components: {
    Hide,
    NavBar
  },
  setup() {
    // const store = useStore()x
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
