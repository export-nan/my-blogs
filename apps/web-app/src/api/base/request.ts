/**
 * @file 封装请求方法
 * @author 大白
 * @date 2022-05-24 15:52:50
 */

import service from './service';

// 默认接收的参数类型
type ReceiveQueryType<T> = Promise<{code: number; msg: string; data: T}>;

export default {
  get<T>(url: string, data?: any, filter?: any): ReceiveQueryType<T> {
    return new Promise((resolve, reject) => {
      service
        .get(url + (filter !== undefined ? `?filter=${JSON.stringify(filter)}` : ''), {params: data})
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  delete<T>(url: string, data?: any): ReceiveQueryType<T> {
    return new Promise((resolve, reject) => {
      service
        .delete(url, {params: data})
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  post<T>(url: string, data?: any): ReceiveQueryType<T> {
    return new Promise((resolve, reject) => {
      service
        .post(url, data)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  put<T>(url: string, data?: any): ReceiveQueryType<T> {
    return new Promise((resolve, reject) => {
      service
        .put(url, data)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {

          reject(err);
        });
    });
  },
  patch<T>(url: string, data?: any): ReceiveQueryType<T> {
    return new Promise((resolve, reject) => {
      service
        .patch(url, data)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  upload<T>(url: string, file: any): ReceiveQueryType<T> {
    return new Promise((resolve, reject) => {
      service({
        method: 'POST',
        url,
        data: file,
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
};
