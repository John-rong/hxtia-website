<template>
  <div class="global_all">
    <HeadTop></HeadTop>
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui';
import HeadTop from './HeadTop.vue';

//全局挂载message
window.$message = useMessage()
window.$dialog = useDialog()
</script>

<style scoped>
/* .global_all {
  margin: 10px auto;
  background-color: rgb(0, 0, 0);
} */
</style>