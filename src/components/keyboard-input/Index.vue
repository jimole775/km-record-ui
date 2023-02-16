<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-02-15 22:23:22
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-16 00:35:00
 * @ Description: 使用 input 来接收键盘的输入
 -->

<template>
  <el-input
    readonly
    :class="[isFocus ? 'input-focus' : '']"
    :value="input"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>
<script lang="ts">
import monitor from '@/plugins/keyboard'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  emits: ['model:value'],
  setup(props, { attrs, emit }) {
    const state = reactive({
      isFocus: false,
      input: attrs.modelValue
    })

    const onFocus = () => {
      state.isFocus = true
      monitor.forceMount((event: KeyboardEvent) => {
        state.input = event.key
        emit('model:value', state.input)
      })
    }

    const onBlur = () => {
      state.isFocus = false
      monitor.unmount()
    }

    return {
      onBlur,
      onFocus,
      ...toRefs(state)
    }
  }
})
</script>
<style lang="scss" scoped>
  @keyframes strike-flash {
    0% {
      background-color: rgba(255,255,255,0);
    }
    100% {
      background-color: rgba(255,255,255,1);
    }
  }

  .input-focus {
    &::before {
      content: " ";
      position: absolute;
      top: 6px;
      left: 30px;
      z-index: 1;
      background-color: #fff;
      height: 68%;
      width: 1px;
      animation-name: strike-flash;
      animation-duration: 500ms;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
</style>
