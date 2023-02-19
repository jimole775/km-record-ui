<!--
 * @Description: 导航栏
 * @Author: Rongxis
 * @Date: 2020-12-17 15:52:19
 * @LastEditors: Rongxis
 * @LastEditTime: 2021-01-27 19:16:50
-->
<template>
  <div class="navbar">
    <div class="left-part">
      <slot name="title" />
    </div>
    <div class="right-part">
      <div class="menu-bar">
        <slot name="menu" />
      </div>
      <div class="operation-bar">
        <slot name="operation" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
  },
  setup() {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #25272E;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 1rem;
  .left-part {
    float: left;
  }
  .right-part {
    display: flex;
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }
    .menu-bar {
      margin: 0 0.5rem;
      position: relative;
    }
    .operation-bar {
      margin: 0 0.5rem;
      position: relative;
      &::before {
        content: " ";
        width: 1px;
        top: 18px;
        left: 0px;
        height: 15px;
        border: 0;
        background-color: #414243;
        position: absolute;
        z-index: 666;
      }
    }
    // .right-part-item {
    //   display: inline-block;
    //   padding: 0 8px;
    //   height: 100%;
    //   font-size: 18px;
    //   color: #d2d2d2;
    //   vertical-align: text-bottom;

    //   &.hover-effect {
    //     cursor: pointer;
    //     transition: color 0.3s;

    //     &:hover {
    //       color: #fff;
    //     }
    //   }
    // }

  }
}
</style>
