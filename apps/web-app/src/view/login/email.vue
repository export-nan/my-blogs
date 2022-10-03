<template>
  <div class="login_container">
    <div class="item">
      <EmailComponent
        :name="emailRef.name"
        :ref="(e)=>setFromElementRef(e as unknown as TEmailComponentCtx)"
        v-model:verifySync="passWordRef.isVerify"
        v-model:valSync="emailRef.value"
      />
    </div>
    <div class="item">
      <PasswordComponent
        :name="passWordRef.name"
        :ref="(e)=>setFromElementRef(e as unknown as TPasswordComponentCtx)"
        v-model:verifySync="passWordRef.isVerify"
        v-model:valSync="passWordRef.value"
      />
    </div>
    <div class="item">
      <SubmitComponent :loading="loadingRef" @click="submit" />
    </div>
  </div>
</template>
<script setup lang="ts">
import EmailComponent from '@/components/input/Email.component.vue';
import SubmitComponent from '@/components/button/Submit.component.vue';
import { ref } from 'vue';
import { reactiveFormItem } from '@/utils/reactive-expert';
import PasswordComponent from '../../components/input/Password.component.vue';

type TEmailComponentCtx = InstanceType<typeof EmailComponent>;
type TPasswordComponentCtx = InstanceType<typeof PasswordComponent>;
type TFromElementItemCtx = TEmailComponentCtx | TPasswordComponentCtx;

const emailRef = reactiveFormItem('', 'email', false);
const passWordRef = reactiveFormItem('', 'passWord', false);
const loadingRef = ref<boolean>(false);

//获取表单元素
const fromElementRef = new Map();
const setFromElementRef = (el: TFromElementItemCtx) => {
  fromElementRef.set(el.name, el);
};
const submit = async () => {
  let isVerify = true;
  // 验证表单
  fromElementRef.forEach((element) => {
    let verify = element.verification();
    console.log(verify.verifyError, isVerify);
    isVerify = isVerify && (verify.verifyError as unknown as boolean);
  });
  console.log(isVerify);
  // 锁定表单数据
  const [email, password] = [emailRef.value, passWordRef.value];
  // 进入loadingRef
  loadingRef.value = true;
  // 发送表单数据
  loadingRef.value = false;
};
</script>
<style scoped lang="scss">
.login_container {
  width: 600px;
  height: min-content;
  border-radius: 8px;
  box-shadow: var(--contaimer-shadow);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 20px;
  box-sizing: border-box;
  .item:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
