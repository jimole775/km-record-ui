<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-11 22:00:07
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-11 22:13:08
 * @ Description:
 -->

<template>
  <span class="km-svg-icon">
    <svg
      class="icon"
      aria-hidden="true"
      :font-size="fontSize"
      @mouseenter="showTip = true"
      @mouseleave="showTip = false"
    >
      <use :xlink:href="'#' + name" />
    </svg>
    <div
      v-if="showTip"
      role="tooltip"
      aria-hidden="false"
      class="svg-icon-popper svg-icon-dark"
      style="z-index: 2022"
    >
      <span>{{ t(tip) }}</span>
      <div class="popper__arrow" />
    </div>
  </span>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    },
    tip: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: '1rem'
    }
  },
  setup () {
    const { t } = useI18n()
    const showTip = ref(false)
    return {
      t, showTip
    }
  }
})
</script>
<style lang="scss" scoped>
.km-svg-icon {
  display: inline-block;
  color: inherit;
  fill: none;
  stroke: currentColor;
  vertical-align: -0.15em;
  .svg-icon-popper {
    position: absolute;
    border-radius: 4px;
    padding: 10px;
    z-index: 2000;
    font-size: 12px;
    line-height: 1.2;
    min-width: 10px;
    word-wrap: break-word;
    visibility: visible;
    margin-top: 0.4rem;
  }
  .svg-icon-dark {
    color: #fff;
    background: #303133;
  }
  .popper__arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: -1;
    top: 0;
    &::after {
      content: " ";
      -webkit-transform: rotate(45deg);
      transform: rorate(45deg);
      background: #303133;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      width: 10px;
      height: 10px;
      top: 0;
      right: 0;
    }
  }
}
</style>
