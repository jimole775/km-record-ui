<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-09 22:49:14
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-10 22:21:26
 * @ Description:
 -->
<template>
  <div class="wrapper">
    <svg class="icon" font-size="3.6rem">
      <use xlink:href="#icon-nodata" />
    </svg>
    <span>{{ t('components.noData') }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup () {
    const { t } = useI18n()
    return {
      t
    }
  }
})
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    font-size: .9rem;
  }
}
</style>
