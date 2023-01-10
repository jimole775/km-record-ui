<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-10 23:05:02
 * @ Description:
 -->

<template>
  <div class="wrapper-box">
    <div class="data-wrapper">
      <el-table
        v-if="list.length"
        class="data-body"
        ref="multipleTableRef"
        :data="list"
        :show-header="false"
        height="200"
        @row-click="rowClick"
        @cell-mouse-enter="rowFocus"
        @cell-mouse-leave="rowBlur"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" align="center" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="long" label="Long" />
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="opr" label="Opreator">
          <template #default="scope">
            <div v-if="scope?.row?.opr">
              <a>播放</a>
              <a>删除</a>
              <a>打开文件夹</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <NoData v-else class="data-body" />
    </div>
    <div class="opr-wrapper">
      <el-button :disabled="!multipleSelection.length">
        {{ t('record.batchDelete') }}
      </el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, ref } from 'vue'
import { ElTable } from 'element-plus'
import { useI18n } from 'vue-i18n'
import NoData from '@/components/no-data/Index.vue'
export default defineComponent({
  components: {
    NoData
  },
  setup() {
    const { t } = useI18n()
    const state = reactive({
      multipleSelection: [],
      list: [
        { id: 1, date: '1', name: '2', long: '00:00:12', opr: false },
        { id: 2, date: '1', name: '2', long: '00:00:12', opr: false },
        { id: 3, date: '1', name: '2', long: '00:00:12', opr: false },
        { id: 4, date: '1', name: '2', long: '00:00:12', opr: false },
        { id: 5, date: '1', name: '2', long: '00:00:12', opr: false },
        { id: 6, date: '1', name: '2', long: '00:00:12', opr: false }
      ]
    })
    const multipleTableRef = ref<InstanceType<typeof ElTable>>()
    const handleSelectionChange = (val: any) => {
      state.multipleSelection = val
    }
    const rowFocus = (row: any) => {
      const sRow = state.list.find(i => row.id === i.id) || {} as any
      sRow.opr = true
    }
    const rowBlur = (row: any) => {
      const sRow = state.list.find(i => row.id === i.id) || {} as any
      sRow.opr = false
    }
    const rowClick = (row: any) => {
      const sRow = state.list.find(i => row.id === i.id) || {} as any
      multipleTableRef?.value?.toggleRowSelection(sRow, undefined)
    }
    return {
      rowBlur,
      rowFocus,
      rowClick,
      multipleTableRef,
      handleSelectionChange,
      ...toRefs(state),
      t
    }
  }
})
</script>
<style lang="scss" scoped>
.wrapper-box {
  height: 100%;
  .data-wrapper {
    height: 200px;
    overflow: hidden;
    .data-body {}
  }
  .opr-wrapper {
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
      color: $lightTextColor;
      background: none;
      border: 1px solid $lightTextColor;
      font-size: .8rem;
      margin: 0 1rem;
      cursor: pointer;
      &:hover {
        background: $lightTextColor;
        color: $dark;
      }
      &:active {
        background: darken($lightTextColor, 15%);
      }
      &:disabled {
        cursor: pointer;
        background: none;
        color: $darkGray;
        border: 1px solid $darkGray;
      }
    }
  }
}
</style>
