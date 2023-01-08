<!--
 * @Description: 混合图表
 * @Author: Rongxis
 * @Date: 2021-01-08 19:27:45
 * @LastEditors: Rongxis
 * @LastEditTime: 2021-01-15 17:41:16
-->
<template>
  <div class="chart-container">
    <MixedChart
      height="100%"
      width="100%"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MixedChart from '@/components/charts/MixedChart.vue'
export default defineComponent({
  components: {
    MixedChart
  }
})
</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
