<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-12 23:40:07
 * @ Description:
 -->

<template>
  <div>
    <el-row
      v-for="row, rowIndex in keyList"
      :key="rowIndex"
      :gutter="24"
    >
      <el-col :span="6">
        <el-checkbox v-model="row.checked" :label="row.label" size="large" />
      </el-col>
      <el-col :span="6">
        <el-select v-model="row.asst" class="m-2">
          <el-option
            v-for="item, iIndex in asstList"
            :key="iIndex"
            :value="item"
          />
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-input v-model="row.key" />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
// import { store } from '@/store'
import { useI18n } from 'vue-i18n'
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const { t } = useI18n()
    const state = reactive({
      asstList: ['alt', 'ctrl', 'shift'],
      keyList: [
        {
          checked: true,
          label: '测试',
          asst: 'alt',
          key: '2',
        },
        {
          checked: true,
          label: '测试2',
          asst: 'alt',
          key: '1',
        }
      ]
    })
    return {
      ...toRefs(state),
      t
    }
  }
})
</script>
<style lang="scss" scoped>
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
</style>
