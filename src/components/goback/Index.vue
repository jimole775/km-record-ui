<!--
 * @ Author: Rongxis
 * @ Create Time: 2023-01-08 00:28:59
 * @ Modified by: Rongxis
 * @ Modified time: 2023-01-08 02:12:16
 * @ Description:
 -->
<template>
  <a
    class="back-icon"
    @click="goback"
  >
    <svg
      class="icon"
      aria-hidden="true"
      font-size="20px"
    >
      <use xlink:href="#icon-back" />
    </svg>
  </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'
export default defineComponent({
  setup() {
    const goback = () => {
      router.go(-1)
    }
    return { goback }
  }
})
</script>
<style lang="scss" scoped>
  .back-icon {
    padding: 0.1rem;
    color: #f2f2f2;
    &:hover {
      background: #333;
      border-radius: 3px;
    }
  }
</style>
