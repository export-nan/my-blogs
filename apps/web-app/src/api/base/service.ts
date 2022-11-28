/**
 * @file 封装请求
 * @author 大白
 * @date 2022-05-24 15:54:06
 */

 import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
//  import camelcaseKeys from 'camelcase-keys';
//  import snakecaseKeys from 'snakecase-keys';
//  import snake from 'to-snake-case';
 import md5 from 'md5';
//  import {userStore} from '@/store/userInfo';
//  import {errorCodeType} from './error-code-type';

 const api_verification_key = 'z]8rj@2RbeL-2022';

 // 创建axios实例
 const service = axios.create({
   baseURL: process.env.VITE_API_URL,
   // 超时设置
   timeout: 30 * 1000,
 });

 // default
//  service.interceptors.request.use(
//    (config: AxiosRequestConfig) => {
//      const token = JSON.parse(localStorage.getItem('UserInfo'))?.token || null;

//      // 设置 token
//      config.headers!.Authorization = `Bearer ${token}` ?? ''; // 让每个请求携带自定义token 请根据实际情况自行修改

//      if (Object.prototype.toString.call(config.data) === '[object FormData]') {
//        // 当对象为formData时 只用于上传文件
//        config.headers['Content-Type'] = 'multipart/form-data;charset=utf-8';
//        // 驼峰转下划线
//        const innerdata = new FormData();

//        config.data.forEach((item, key) => {
//          innerdata.append(snake(key), item);
//        });

//        config.data = innerdata;
//      } else {
//        config.headers['Content-Type'] = 'application/json;charset=utf-8';
//        // 驼峰转下划线
//        config.data = config.data ? snakecaseKeys(config.data, {deep: true}) : null;
//        config.params = config.params ? snakecaseKeys(config.params, {deep: true}) : null;
//      }

//      let verificationURL = config.url;

//      // 去掉句首的斜线 /
//      if (verificationURL.charAt(0) === '/') {
//        verificationURL = verificationURL.substring(1);
//      }

//      const concatString = `/${verificationURL}${api_verification_key}`;

//      // 接口参数加密编码
//      config.headers['x-verification-code'] = md5(concatString);

//      return config;
//    },
//    error => {
//      Promise.reject(error);
//    },
//  );

// 响应拦截器
//  service.interceptors.response.use(
//    (res: AxiosResponse) => {
//      // 获取状态储存
//      const userData = userStore();
//      // 未返回状态，则默认无响应
//      const code = res.data.code ?? 999;

//      // 获取错误信息
//      if (code !== 200) {
//        // 处理http错误，抛到业务代码
//        const msg = errorCodeType(code) || res.data.msg;

//        message.error(msg);

//        // 如果返回认证失败
//        if (code === 1300 || code === 1020 || code === 1030 || code === 1021 || code === 1010 || code === 1201) {
//          userData.clear();
//          window.location.reload();
//        }
//      }

//      // 下划线转驼峰
//      const response = camelcaseKeys(res.data, {deep: true});

//      return Promise.resolve({...res, data: response});
//    },
//    error => Promise.reject(error),
//  );

 export default service;
