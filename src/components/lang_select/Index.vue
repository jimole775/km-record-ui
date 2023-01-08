<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-07 17:03:24
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-08 03:10:45
 * @ Description:
 -->

<template>
  <!-- <div>
    <el-dropdown>
      <svg
        class="icon"
        aria-hidden="true"
        font-size="45px"
        :class="{'svg-color': isWhite}"
      >
        <use xlink:href="#iconzhongyingwen" />
      </svg>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in languages"
            :key="item.value"
            :disabled="language===item.value"
          >
            <span @click="handleSetLanguage(item.value)">{{ item.name }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div> -->
  <button
    class="lang-switch"
    @click="handleSetLanguage()"
  >
    <svg
      class="icon"
      aria-hidden="true"
      font-size="1.6rem"
    >
      <use :xlink:href="icon" />
    </svg>
  </button>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { useI18n } from 'vue-i18n'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { AppActionTypes } from '@/store/modules/app/action-types'
// import { ElMessage } from 'element-plus'
const iconMap: {[key: string]: string} = {
  'zh-cn': '#icon-a-zhongyingwenzhongwen',
  en: '#icon-a-zhongyingwenyingwen'
}

export default defineComponent({
  setup() {
    const store = useStore()
    const { locale } = useI18n()

    const state = reactive({
      handleSetLanguage: () => {
        const lang = locale.value = store.state.app.language === 'zh-cn' ? 'en' : 'zh-cn'
        store.dispatch(AppActionTypes.ACTION_SET_LANGUAGE, lang)
      }
    })
    const language = computed(() => {
      return store.state.app.language
    })
    const icon = computed(() => {
      return iconMap[store.state.app.language]
    })
    return {
      ...toRefs(state),
      language,
      icon
    }
  }
})

</script>

<style lang="scss" scoped>
// .svg-color{
//   fill: white;
// }
.lang-switch {
  border: none;
  background: none;
}
</style>
