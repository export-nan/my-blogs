<template>
  <div class="ui-component input-comtainer">
    <input :class="{ 'is-verify-error': verifyRef }" v-model="emailRef" @blur="verification" :name="name" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
// props 编译器宏选项，无需引入
const props = defineProps<{
  valSync: string;
  name: string;
  verifySync?: boolean;
}>();
// emits 编译器宏选项，无需引入
const emit = defineEmits(['update:valSync', 'update:verifySync']);

// 数据双向绑定
const emailRef = computed({
  get: () => props.valSync,
  set: (v) => emit('update:valSync', v),
});
const verifyRef = computed({
  get: () => props.verifySync,
  set: (v) => emit('update:verifySync', v),
});
// 验证器方法
function verification() {
  // verifyRef.value = !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(emailRef.value);
  return {
    name: props.name,
    // verifyError: verifyRef.value,
  };
}
// 将验证方法暴露出去
defineExpose({ verification, name: props.name });
</script>
