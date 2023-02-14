<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-13 22:20:22
 * @ Description:
 -->

<template>
  <div class="wrapper-box">
    <div class="data-wrapper">
      <vxe-table
        v-if="list.length"
        :data="list"
        stripe
        height="200"
        border="none"
        class="km-vex-table"
        ref="multipleTableRef"
        :show-header="false"
        :row-config="{isHover: true}"
        :tooltip-config="{}"
        @cell-mouseenter="rowFocus"
        @cell-mouseleave="rowBlur"
        @cell-click="rowClick"
        @checkbox-change="handleSelectionChange"
      >
        <vxe-column type="checkbox" width="60" />
        <vxe-column field="name" title="Name" />
        <vxe-column field="long" title="Long" />
        <vxe-column field="date" title="Date" />
        <vxe-column field="opr" title="Opreator">
          <template #default="{row}">
            <div v-if="row.opr" class="row-opr-bar">
              <a @click.stop="runPlay" class="opr-icon">
                <SvgIcon name="icon-play3" tip="record.play" font-size="1.1rem" />
              </a>
              <a @click.stop="runEdit" class="opr-icon">
                <SvgIcon name="icon-cut" tip="record.edit" font-size="1.1rem" />
              </a>
              <a @click.stop="runOpen" class="opr-icon">
                <SvgIcon name="icon-folder2" tip="record.openDir" font-size="1.1rem" />
              </a>
              <a @click.stop="runDelete" class="opr-icon">
                <SvgIcon name="icon-delete-fill1" tip="record.delete" font-size="1.1rem" />
              </a>
            </div>
          </template>
        </vxe-column>
      </vxe-table>
      <NoData v-else class="data-body" />
    </div>
    <div class="opr-wrapper">
      <el-button @click="checkall">
        {{ t(isCheckedAll ? 'record.cancelall' : 'record.checkall') }}
      </el-button>
      <el-button :disabled="!hasSelected">
        {{ t('record.batchDelete') }}
      </el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n'
import { defineComponent, computed, reactive, ref, toRefs } from 'vue'
import { VxeTableEvents, VxeTableInstance } from 'vxe-table'
import NoData from '@/components/no-data/Index.vue'
import SvgIcon from '@/components/svg-icon/Index.vue'
import { parseTime } from '@/utils'
export default defineComponent({
  components: {
    NoData,
    SvgIcon
  },
  setup() {
    const { t } = useI18n()
    const state = reactive({
      isCheckedAll: false,
      list: (() => {
        const res = []
        for (let index = 0; index < 100; index++) {
          res.push({ id: index, date: parseTime(new Date().getTime()), name: '2', long: '00:00:12', opr: false })
        }
        return res
      })()
    })
    const multipleTableRef = ref<VxeTableInstance>()
    const handleSelectionChange: VxeTableEvents.CheckboxChange = ({ row }) => {
      const $table = multipleTableRef.value
      $table?.toggleCheckboxRow(row)
    }
    const rowFocus: VxeTableEvents.CellMouseenter = ({ row }) => {
      console.log('fouces')
      row.opr = true
    }
    const rowBlur: VxeTableEvents.CellMouseleave = ({ row }) => {
      console.log('blur')
      row.opr = false
    }
    const rowClick: VxeTableEvents.CellClick = ({ row }) => {
      const $table = multipleTableRef.value
      $table?.toggleCheckboxRow(row)
    }
    const runPlay = () => {
      console.log('runPlay')
    }
    const runOpen = () => {
      console.log('runOpen')
    }
    const runEdit = () => {
      console.log('runEdit')
    }
    const runDelete = () => {
      console.log('runDelete')
    }
    const checkall = () => {
      const $table = multipleTableRef.value
      state.isCheckedAll = !state.isCheckedAll
      if (state.isCheckedAll) {
        $table?.setAllCheckboxRow(true)
      } else {
        $table?.setAllCheckboxRow(false)
      }
    }
    const hasSelected = computed(() => {
      const $table = multipleTableRef.value
      const records = $table?.getCheckboxRecords()
      return !!(records?.length)
    })
    return {
      rowBlur,
      rowFocus,
      rowClick,
      runPlay,
      runEdit,
      runOpen,
      runDelete,
      checkall,
      hasSelected,
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
  position: relative;
  .data-wrapper {
    height: 200px;
    overflow: hidden;
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
      margin-left: 1rem;
      cursor: pointer;
      margin: 0 1rem;
      &:hover {
        background: $lightTextColor;
        color: $dark;
      }
      &:active {
        background: darken($lightTextColor, 15%);
      }
      &:disabled {
        cursor: default;
        background: none;
        color: $darkGray;
        border: 1px solid $darkGray;
      }
    }
  }
}
.row-opr-bar {
  .opr-icon {
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 2px;
    > span {
      vertical-align: 0;
    }
    &:hover {
      background-color: lighten($dark, 22%);
    }
    &:active {
      background-color: lighten($dark, 18%);
    }
    > span {
      vertical-align: 0;
    }
  }
}

</style>
