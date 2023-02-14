<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-13 22:15:01
 * @ Description:
 -->

<template>
  <el-row
    :gutter="24"
    style="background: #1A1B20;height: 100%;"
  >
    <el-col :span="6">
      <div class="class-item">
        <button @click="toRecord">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-record" />
          </svg>
          <span>{{ t('home.record') }}</span>
        </button>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="class-item">
        <button @click="toPlay">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-Play" />
          </svg>
          <span>{{ t('home.play') }}</span>
        </button>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="class-item">
        <button @click="toConfig">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-icon-config" />
          </svg>
          <span>{{ t('home.config') }}</span>
        </button>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="class-item">
        <button @click="toMore">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-more2" />
          </svg>
          <span>{{ t('home.more') }}</span>
        </button>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { reactive, defineComponent, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
import { kmrClientRouter } from '@/router'
export default defineComponent({
  setup() {
    const { t } = useI18n()
    const state = reactive({
      toRecord() {
        kmrClientRouter.push('/record')
      },
      toPlay() {
        // kmrClientRouter.push('/play')
      },
      toConfig() {
        // kmrClientRouter.push('/config')
      },
      toMore() {
        // kmrClientRouter.push('/more')
      }
    })
    return {
      t,
      ...toRefs(state)
    }
  }
})
</script>
