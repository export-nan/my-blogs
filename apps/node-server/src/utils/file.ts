/**
 * @file 文件处理公共方法
 * @author NAN
 * @date 2022-10-10
 */

import * as crypto from 'crypto';

// 获取可读文件流的Hash值
export const getReadStreamHash =  (stream: NodeJS.ReadStream, hashOption: {algorithm: string, options?:crypto.HashOptions} ): Promise<string> => new Promise((resolve) => {

  const hash = crypto.createHash('sha256');

  stream.on('data', (data) => {
    console.log('aaaa');
    hash.update(data);
  })

  stream.on('end', () => {
    resolve(hash.digest('hex'));
  })

  stream.resume()
})
