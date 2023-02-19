<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-07 17:03:24
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-19 01:49:28
 * @ Description:
 -->

<template>
  <button
    class="right-menu-item hover-effect lang-switch"
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
// }
.lang-switch {
  border: none;
  background: none;
}
.right-menu-item {
  display: inline-block;
  padding: 0 8px;
  height: 100%;
  font-size: 18px;
  color: #d2d2d2;
  vertical-align: text-bottom;

  &.hover-effect {
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
}
</style>
