<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-02-19 00:02:27
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-20 01:59:17
 * @ Description:
 -->

<template>
  <a class="hide-button icon-button" @click.stop="hide">
    <SvgIcon name="icon-close3" font-size="1.4rem" />
  </a>
</template>
<script lang="ts">
import webview from '@/plugins/webview'
import { defineComponent } from 'vue'
import SvgIcon from '@/components/svg-icon/Index.vue'
export default defineComponent({
  components: {
    SvgIcon
  },
  setup () {
    const hide = () => {
      webview.call('hide')
      // console.log('close')
    }
    return {
      hide
    }
  }
})
</script>
<style lang="scss" scoped>
.hide-button {}
</style>
