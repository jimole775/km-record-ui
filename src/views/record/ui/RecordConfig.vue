<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-13 23:08:05
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
          <button
            class="asst-bar-position"
            :class="isWebRecord ? 'class-item-button-checked' : ''"
            @click.capture="checkToWeb"
          >
            <SvgIcon name="icon-web-channel" font-size="2.4rem" />
            <span>{{ t('record.web') }}</span>
            <div v-if="isWebRecord" class="asst-bar">
              <SvgIcon name="icon-settings" />
              <el-checkbox
                v-model="isWebRecord"
                label=" "
                size="large"
                name="webCheck"
                class="asst-bar-checkbox"
                @click.stop.prevent="checkToWeb"
              />
            </div>
          </button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="class-item">
          <button
            class="asst-bar-position"
            :class="isGameRecord ? 'class-item-button-checkbox' : ''"
            @click.capture="checkToGame"
          >
            <SvgIcon name="icon-game" font-size="2.4rem" />
            <span>{{ t('record.game') }}</span>
            <div v-if="isGameRecord" class="asst-bar">
              <SvgIcon name="icon-settings" />
              <el-checkbox
                v-model="isGameRecord"
                class="asst-bar-checkbox"
                name="gameCheck"
                label=" "
                size="large"
                @click.stop.prevent="checkToGame"
              />
            </div>
          </button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="class-item">
          <button @click="open">
            <SvgIcon name="icon--keyboard" font-size="2.4rem" />
            <span>{{ t('record.hotkey') }}</span>
          </button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="class-item start-item">
          <button @click="runStart">
            <div class="start-button-core">
              <span>{{ t('record.start') }}</span>
            </div>
          </button>
        </div>
      </el-col>
    </el-row>
    <div v-if="idle" class="foot-bar">
      <div class="opr-bar" :style="{borderBottom: switchSign ? '1px solid #030303' : ''}">
        <a class="list-icon" @click="openList">
          <SvgIcon name="icon-dot3list" font-size="1.2rem" />
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
import { useStore } from '@/store'
import { useI18n } from 'vue-i18n'
import { setWH } from '@/utils/client_rect'
import { getClientDefaultRect } from '@/utils/cookies'
import { KmrActionTypes } from '@/store/modules/kmr/action-types'
import { defineComponent, defineAsyncComponent, reactive, toRefs } from 'vue'
import goback from '@/components/goback/Index.vue'
import SvgIcon from '@/components/svg-icon/Index.vue'
import webview from '@/plugins/webview'

let switchSignRecord: boolean = false

export default defineComponent({
  components: {
    goback,
    SvgIcon,
    RecordItemList: defineAsyncComponent(() => import('./chunks/RecordItemList.vue'))
  },
  setup() {
    const listHeight = 260
    const { t } = useI18n()
    const { h } = getClientDefaultRect()
    const store = useStore()
    const switchSign = ref(switchSignRecord)
    const isWebRecord = ref(true)
    const isGameRecord = ref(false)
    const idle = computed(() => store.state.kmr.record.state.idle)
    const openList = () => {
      switchSignRecord = switchSign.value = !switchSign.value
      setWH({ h: switchSign.value ? h + listHeight : h })
    }
    const runStart = () => {
      store.dispatch(KmrActionTypes.ACTION_SET_RECORD_START, undefined)
    }
    const open = () => {
      webview.call('open_modal', ['hotkey-config'])
    }
    const checkToWeb = () => {
      isWebRecord.value = true
      isGameRecord.value = false
    }
    const checkToGame = () => {
      isWebRecord.value = false
      isGameRecord.value = true
    }
    return {
      t,
      idle,
      open,
      openList,
      runStart,
      isWebRecord,
      isGameRecord,
      listHeight,
      checkToWeb,
      checkToGame,
      switchSign
    }
  }
})
</script>
<style lang="scss" scoped>
.class-item-button-checked {
  color: #0091FF;
}
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
      background-color: #FE5844;
      line-height: 80px;
      span {
        color: #fff;
        font-size: #fff;
      }
      &:hover {
        background-color: #D14B3E;
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
  color: #fff;
  line-height: 40px;
  border-radius: 2px;
  cursor: pointer;
  margin: 0 0.5rem;
  padding: 0 2px;
  &:hover {
    background-color: #333;
  }
}
.foot-bar {
  .opr-bar {
    margin: 0 3px;
    border-top: 1px solid #030303;
  }
  .data-bar {}
}
.asst-bar-position {
  position: absolute;
  .asst-bar {
    position: absolute;
    bottom: 3px;
    right: -2rem;
    svg {
      font-size: 1rem;
    }
    .asst-bar-checkbox {
      width: 14px;
      height: 14px;
    }
  }
}
</style>
