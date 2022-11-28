/**
 * @file 文件处理公共方法
 * @author NAN
 * @date 2022-10-10
 */

import * as crypto from 'crypto';

/**
 * 获取可读文件流的Hash值
 *  @param stream 可读流
 *  @param hashOption createHash选项
 * */
export const getReadStreamHash =  (stream: NodeJS.ReadStream, hashOption: {algorithm: string, options?:crypto.HashOptions} ): Promise<string> => new Promise((resolve) => {
  const hash = crypto.createHash(hashOption.algorithm, hashOption.options);
  stream.on('data', (data) => {
    hash.update(data);
  })
  stream.on('end', () => {
    resolve(hash.digest('hex'));
  })
  stream.resume()
})

/**
 * 获取可读流的内容
 * @param stream 可读流
 * @param encoding 返回的内容的格式
 * */
export const getReadStreamContent = (stream: NodeJS.ReadStream, encoding?: BufferEncoding): Promise<string>  => new Promise((resolve) => {
  let content = ''

  stream.on('data', (data) => {
    content += data.toString(encoding||'utf-8');
  })
  stream.on('end', () => {
    resolve(content);
  })
  stream.on('error', (res)=> {
    console.error(res);
  })
  stream.resume()
})
