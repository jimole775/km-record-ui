<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-13 23:53:55
 * @ Description:
 -->

<template>
  <div class="record-ui">
    <RecordConfig v-if="idle" />
    <RecordStarted v-else />
  </div>
</template>
<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent, watch } from 'vue'
import { resetWH, setWH, getWH } from '@/utils/client_rect'
import RecordConfig from './ui/RecordConfig.vue'
import RecordStarted from './ui/RecordStarted.vue'
import { Rect } from '@/store/modules/kmr/state'
import { getClientDefaultRect } from '@/utils/cookies'
let screenSizeRecord: Rect = getClientDefaultRect()
export default defineComponent({
  components: {
    RecordConfig,
    RecordStarted
  },
  setup() {
    const store = useStore()
    const idle = computed(() => store.state.kmr.record.state.idle)
    watch(idle, (val) => {
      if (val) {
        setWH(screenSizeRecord)
      } else {
        screenSizeRecord = getWH()
        resetWH()
      }
    })
    return {
      idle
    }
  }
})
</script>
<style lang="scss" scoped>
.record-ui {
  height: 100%;
}
</style>
