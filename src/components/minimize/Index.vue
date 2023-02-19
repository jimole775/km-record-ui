<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-02-19 00:02:27
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-19 16:08:54
 * @ Description:
 -->

<template>
  <a class="minimize-button icon-button" @click.stop="minimize">
    <SvgIcon name="icon-minimize_px_rounded" font-size="1.4rem" />
  </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '@/components/svg-icon/Index.vue'
import webview from '@/plugins/webview'
export default defineComponent({
  components: {
    SvgIcon
  },
  setup () {
    const minimize = () => {
      webview.call('minimize')
      console.log('minimize')
    }
    return {
      minimize
    }
  }
})
</script>
<style lang="scss" scoped>
.minimize-button {}
</style>
