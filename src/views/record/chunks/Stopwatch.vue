<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-13 22:39:06
 * @ Description:
 -->

<template>
  <div class="stopwatch">
    {{ timerView }}
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, watch, ref, onUnmounted } from 'vue'
export default defineComponent({
  props: {
    paused: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    let sec = 0
    let min = 0
    let hur = 0
    let clockWalkingDivid = 1000
    let clockWalkingHandler: any = null
    const timerView = ref('00:00:00')
    const working = computed(() => !props.paused)
    const getTimes = () => {
      const [h, m, s] = timerView.value.split(':')
      return parseInt(h) * 60 * 60 + parseInt(m) * 60 + parseInt(s)
    }
    const clockWalking = () => {
      clockWalkingHandler = setTimeout(() => {
        if (working.value === true) {
          sec = sec + 1
          if (sec === 60) {
            sec = 0
            min = min + 1
          }
          if (min === 60) {
            min = 0
            hur = hur + 1
          }
          timerView.value = `${hur < 10 ? '0' + hur : hur}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`
          clockWalkingDivid = 1000
          emit('update:modelValue', getTimes())
          return clockWalking()
        }
      }, clockWalkingDivid)
    }

    watch(working, (val) => {
      console.log('秒针间隔：', clockWalkingDivid)
      if (val === true) {
        clockWalking()
      } else {
        clearTimeout(clockWalkingHandler)
        const str = new Date().getTime().toString()
        const ms = str.substring(str.length - 3, str.length)
        clockWalkingDivid = 1000 - parseInt(ms)
      }
    }, { imediate: true })
    onUnmounted(() => {
      console.log('comp is unmount')
      clearTimeout(clockWalkingHandler)
    })
    return {
      timerView
    }
  }
})
</script>
<style lang="scss" scoped>
.stopwatch {
  border: 1px solid #343436;
  padding: 0.3rem 0.9rem;
  font-size: 2.2rem;
  border-radius: 3px;
  background: #343436;
  color: #fff;
}
</style>
