<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 00:47:43
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-19 04:09:01
 * @ Description:
 -->

<template>
  <div class="my-logo">
    <svg
      class="icon"
      aria-hidden="true"
      font-size="1.6rem"
    >
      <use xlink:href="#icon-mouse-2" />
    </svg>
    <span>{{ t('logo.text') }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  }
})
</script>
<style lang="scss" scoped>
.my-logo {
  display: inline-block;
  color: #fff;
  height: 50px;
  line-height: 50px;
  svg {
    vertical-align: -0.25em;
    margin: 0 0.2em;
  }
}
</style>
