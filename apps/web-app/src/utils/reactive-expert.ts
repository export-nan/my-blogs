/**
 * @file 基于vue封装的响应式数据方法扩展
 * @date 2022-07-28
 */

import { reactive } from 'vue';

// 表单项响应式数据
// @param* value 表单的响应式数据
// @param* name 表单名称
// @param isVerify 表单验证参数
export const reactiveFormItem = <T>(value: T, name: string, isVerify?: boolean) => reactive({ value, name, isVerify });
