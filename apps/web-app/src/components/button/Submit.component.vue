<template>
  <button class="ui-component btn" :class="loading" :disabled="loading">
    <span>提交</span><span v-if="loading">...</span>
  </button>
</template>

<script setup lang="ts">
// 编译器宏不需要引入，可直接使用，与 eslint 校验相冲突，单行禁用 eslint
// eslint-disable-next-line no-undef
const props = defineProps<{
  loading?: boolean;
}>();
</script>
