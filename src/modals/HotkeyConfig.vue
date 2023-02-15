<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-15 22:56:25
 * @ Description:
 -->

 <template>
  <div class="hotkey-config">
    <el-row
      class="hotkey-config-row"
      v-for="row, rowIndex in keyList"
      :key="rowIndex"
      :gutter="24"
    >
      <el-col :span="6">
        <el-checkbox v-model="row.checked" :label="row.label" size="large" />
      </el-col>
      <el-col :span="6">
        <el-select
          :disabled="!row.checked"
          v-model="row.asst"
          class="m-2"
          size="large"
        >
          <el-option
            v-for="item, iIndex in asstList"
            :key="iIndex"
            :value="item"
          />
        </el-select>
      </el-col>
      <el-col :span="6">
        <KeyboardInput
          :disabled="!row.checked"
          v-model="row.key"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n'
import { reactive, defineComponent, toRefs } from 'vue'
import KeyboardInput from '@/components/keyboard-input/Index.vue'
export default defineComponent({
  components: {
    KeyboardInput
  },
  setup() {
    const { t } = useI18n()
    const state = reactive({
      asstList: ['alt', 'ctrl', 'shift'],
      keyList: [
        { checked: true, label: '开始/暂停', asst: 'alt', key: '1' },
        { checked: true, label: '停止', asst: 'alt', key: '2' }
      ]
    })
    return {
      t,
      ...toRefs(state)
    }
  }
})
</script>
<style lang="scss" scoped>
.hotkey-config {
  .el-col {
    margin: 0.3rem 0;
    line-height: 2;
    label.el-checkbox {
      margin-left: 2rem;
    }
  }
}
</style>
