<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-02-19 00:02:27
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-20 01:59:07
 * @ Description:
 -->

<template>
  <a class="close-button icon-button" @click.stop="close">
    <SvgIcon name="icon-close3" font-size="1.4rem" />
  </a>
</template>
<script lang="ts">
import webview from '@/plugins/webview'
import { defineComponent } from 'vue'
import SvgIcon from '../svg-icon/Index.vue'
export default defineComponent({
  components: {
    SvgIcon
  },
  setup () {
    const close = () => {
      webview.call('close')
      // console.log('close')
    }
    return {
      close
    }
  }
})
</script>
<style lang="scss" scoped>
.close-button {}
</style>
