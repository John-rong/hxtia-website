<script setup lang="ts">
import Global from './components/Global.vue';

</script>

<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-dialog-provider>

        <Global></Global>

      </n-dialog-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<style scoped></style>
