<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-13 23:45:17
 * @ Description:
 -->

<template>
  <el-row
    :gutter="24"
    style="background: #1A1B20;height: 100%;"
  >
    <el-col :span="6">
      <div class="record-class-item">
        <Stopwatch :paused="paused" v-model="costTime" />
      </div>
    </el-col>
    <el-col :span="6">
      <div class="record-class-item">
        操作步骤：{{ step }}
      </div>
    </el-col>
    <el-col :span="6">
      <div class="record-class-item pause-item">
        <button @click="runPause">
          <SvgIcon v-if="paused" style="transform: translateX(3px);" name="icon-play" font-size="2.8rem" />
          <SvgIcon v-if="working" name="icon-zantinganniu" font-size="3.2rem" />
        </button>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="record-class-item stop-item">
        <button @click="runStop">
          <span class="fake-square-icon" />
        </button>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import Stopwatch from '../chuns/Stopwatch.vue'
import SvgIcon from '@/components/svg-icon/Index.vue'
import { KmrActionTypes } from '@/store/modules/kmr/action-types'
import { defineComponent, computed, toRefs, reactive } from 'vue'
export default defineComponent({
  components: {
    SvgIcon,
    Stopwatch
  },
  setup() {
    const store = useStore()
    const { t } = useI18n()
    const paused = computed(() => store.state.kmr.record.state.paused)
    const working = computed(() => store.state.kmr.record.state.working)
    const step = computed(() => store.state.kmr.record.step)
    const state = reactive({
      costTime: 0,
      runPasuse () {
        if (paused.value) {
          store.dispatch(KmrActionTypes.ACTION_SET_RECORD_START, undefined)
        } else {
          store.dispatch(KmrActionTypes.ACTION_SET_RECORD_PAUSE, undefined)
        }
      },
      async runStop () {
        store.dispatch(KmrActionTypes.ACTION_SET_RECORD_STOP, undefined)
      },
      runStart () {
        store.dispatch(KmrActionTypes.ACTION_SET_RECORD_START, undefined)
      }
    })
    return {
      t,
      step,
      paused,
      working,
      ...toRefs(state)
    }
  }
})
</script>
<style lang="scss" scoped>
.clock {
  border: 1px solid #343436;
  padding: 0.3rem 0.9rem;
  font-size: 2.2rem;
  border-radius: 3px;
  background-color: #101013;
  color: #fff;
}
.button_size {
  height: 80px;
  width: 80px;
  line-height: 80px;
  border-radius: 100%;
  border: none;
}

.button_layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.record-class-item {
  @extend .button_layout;
  height: 100%;
  width: 100%;
  button {
    cursor: pointer;
    color: $defaultTextColor;
  }
}
.pause-item {
  button {
    @extend .button_size;
    @extend .button_layout;
    background-color: #008CFF;
    span.km-svg-icon {
      display: flex;
      justify-content: center;
      color: darken($color: #fff, $amount: 8%);
    }
    &:hover {
      background-color: darken($color: #008CFF, $amount: 4%);
      span.km-svg-icon {
        color: darken($color: #fff, $amount: 12%);
      }
    }
    &:active {
      background-color: darken($color: #008CFF, $amount: 8%);
      span.km-svg-icon {
        color: darken($color: #fff, $amount: 16%);
      }
    }
  }
}
.stop-item {
  button {
    @extend .button_size;
    @extend .button_layout;
    background-color: #FE5844;
    .fake-square-icon {
      display: inline-block;
      width: 26px;
      height: 26px;
      background-color: darken($color: #fff, $amount: 8%);
      border-radius: 4px;
    }
    &:hover {
      background-color: darken($color: #FE5844, $amount: 4%);
      .fake-square-icon {
        background-color: darken($color: #fff, $amount: 12%);
      }
    }
    &:active {
      background-color: darken($color: #FE5844, $amount: 8%);
      .fake-square-icon {
        background-color: darken($color: #fff, $amount: 16%);
      }
    }
  }
}
</style>
