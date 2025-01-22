<template>
  <div class="media-record">
    <span>我是媒体组件</span>
    <span>必填：{{ required }}</span>
    <span>时长： {{ maxSeconds }}</span>
  </div>
</template>

<script setup lang="ts">
import { mediaRecordProps } from './config';
defineOptions({
  name: 'MediaRecord',
});

defineProps(mediaRecordProps);
</script>

<style lang="scss" scoped>
.media-record {
  color: #f00;
}
</style>
