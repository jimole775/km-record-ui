<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-19 04:36:32
 * @ Description:
 -->

<template>
  <div class="app-main">
    <Header />
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from './Header.vue'
export default defineComponent({
  components: {
    Header
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    router.push({ path: route.path })
    const key = () => {
      return route.path
    }
    return {
      key
    }
  }
})
</script>
<style lang="scss" scoped>
.app-main {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: calc(100% - 50px);
}
</style>
