<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-08 19:42:42
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
    <div class="foot-bar">
      <div class="opr-list">
        <a class="list-icon">
          <svg
            class="icon"
            aria-hidden="true"
            font-size="1.2rem"
          >
            <use xlink:href="#icon-dot3list" />
          </svg>
        </a>
      </div>
      <div class="data-list">
        <el-table
          :data="list"
        >
          <el-table-column prop="date" label="Date" sortable width="180" />
          <el-table-column prop="name" label="Name" width="180" />
        </el-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import goback from '@/components/goback/Index.vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  components: {
    goback
  },
  setup() {
    const { t } = useI18n()
    return {
      list: [{ data: 1, name: 2 }],
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
.foot-bar {
  height: 40px;
  background: #1A1B20;
  .opr-list {
    margin: 0 3px;
    border-top: 1px solid #030303;
  }
  .data-list {

  }
}
</style>
