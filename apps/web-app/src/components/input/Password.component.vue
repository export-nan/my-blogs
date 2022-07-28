<template>
  <div class="ui-component input-comtainer">
    <input
      v-model="emailRef"
      :class="{ 'is-verify-error': verifyRef }"
      @blur="verification"
      :type="ShowPassword ? 'text' : 'password'"
      :name="name"
    />
    <SymbolIocn class="passwordIocn" v-if="!ShowPassword" @click="changeShowPassWord" iocn-code="#icon-mimabukejian" />
    <SymbolIocn class="passwordIocn" v-if="ShowPassword" @click="changeShowPassWord" iocn-code="#icon-mimakejian" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import SymbolIocn from '@/iocn/Symbol.iocn.vue';
// props 编译器宏选项，无需引入
const props = defineProps<{
  valSync: string;
  name: string;
  verifySync?: boolean;
}>();

// 数据双向绑定
const emit = defineEmits(['update:valSync', 'update:verifySync']);
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
  verifyRef.value = !(emailRef.value.length >= 8 && emailRef.value.length <= 20);
  return {
    name: props.name,
    verifyError: verifyRef.value,
  };
}

// 显示/隐藏 密码控制器
const ShowPassword = ref<boolean>(false);
const changeShowPassWord = () => {
  ShowPassword.value = !ShowPassword.value;
};

// 将验证方法暴露出去
defineExpose({ verification, name: props.name });
</script>
<style scoped lang="scss">
.input-comtainer {
  position: relative;
  .passwordIocn {
    font-size: 26px;
    padding: 5px;
    position: absolute;
    right: 5px;
    cursor: pointer;
  }
}
</style>
