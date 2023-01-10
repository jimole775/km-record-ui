<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-10 22:27:56
 * @ Description:
 -->

<template>
  <div>
    <a class="back"><goback /></a>
    <el-row
      :gutter="24"
      style="background: #1A1B20;height: 190px;"
    >
      <el-col :span="6">
        <div class="class-item">
          <button>
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-web-channel" />
            </svg>
            <span>{{ t('record.web') }}</span>
          </button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="class-item">
          <button>
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-game" />
            </svg>
            <span>{{ t('record.game') }}</span>
          </button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="class-item">
          <button>
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon--keyboard" />
            </svg>
            <span>{{ t('record.hotkey') }}</span>
          </button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="class-item start-item">
          <button>
            <div class="start-button-core">
              <span>{{ t('record.start') }}</span>
            </div>
          </button>
        </div>
      </el-col>
    </el-row>
    <div class="foot-part">
      <div class="opr-bar" :style="{borderBottom: switchSign ? '1px solid #030303' : ''}">
        <a class="list-icon" @click="openList">
          <svg
            class="icon"
            aria-hidden="true"
            font-size="1.2rem"
          >
            <use xlink:href="#icon-dot3list" />
          </svg>
        </a>
      </div>
    </div>
    <div
      v-if="switchSign"
      class="data-bar"
      :style="{height: listHeight + 'px'}"
    >
      <RecordItemList />
    </div>
  </div>
</template>
<script lang="ts">
// import { store } from '@/store'
import { useI18n } from 'vue-i18n'
import { defineComponent, reactive, toRefs } from 'vue'
import useRect from '@/utils/use_rect'
import goback from '@/components/goback/Index.vue'
import RecordItemList from './RecordItemList.vue'
import { defaultRect } from '@/constant/default_rect'
export default defineComponent({
  components: {
    goback,
    RecordItemList
  },
  setup() {
    const listHeight = 260
    const { t } = useI18n()
    const h = defaultRect.height || 0
    const state = reactive({ switchSign: false })
    const openList = () => {
      state.switchSign = !state.switchSign
      useRect({ h: state.switchSign ? h + listHeight : h })
    }
    return {
      ...toRefs(state),
      openList,
      listHeight,
      t
    }
  }
})
</script>
<style lang="scss" scoped>
.start-item {
  button {
    height: 99px;
    width: 99px;
    border-radius: 100%;
    background: #482428;
    display: flex;
    flex-direction: column;
    border: none;
    justify-content: center;
    align-items: center;
    .start-button-core {
      border-radius: 100%;
      width: 80px;
      height: 80px;
      background: #FE5844;
      line-height: 80px;
      span {
        color: #fff;
        font-size: #fff;
      }
      &:hover {
        background: #D14B3E;
      }
    }
  }
}
.back {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
}
.list-icon {
  color:#fff;
  line-height: 40px;
  border-radius: 2px;
  cursor: pointer;
  margin: 0 0.5rem;
  padding: 0 2px;
  &:hover {
    background: #333;
  }
}
.foot-part {
  .opr-bar {
    margin: 0 3px;
    border-top: 1px solid #030303;
  }
  .data-bar {
  }
}
</style>
