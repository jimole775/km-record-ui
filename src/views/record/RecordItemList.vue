<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 01:39:55
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-09 23:05:52
 * @ Description:
 -->

<template>
  <div>
    <el-table
      v-if="list.length"
      :data="list"
    >
      <el-table-column prop="date" label="Date" sortable width="180" />
      <el-table-column prop="name" label="Name" width="180" />
    </el-table>
    <div v-else>
      <NoData />
    </div>
    <div>
      <button>批量删除</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import NoData from '@/components/no-data/Index.vue'
export default defineComponent({
  components: {
    NoData
  },
  setup() {
    const { t } = useI18n()
    return {
      list: [],
      t
    }
  }
})
</script>
<style lang="scss" scoped>
.data-list {

}
</style>
