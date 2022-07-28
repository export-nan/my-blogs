<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="props.iocnCode"></use>
  </svg>
</template>
<script setup lang="ts">
// 引入公共图标库
import '@nan/icon/src/icon';
const props = defineProps<{
  iocnCode: string;
}>();
</script>
