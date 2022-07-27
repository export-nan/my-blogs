/**
 * @file 工具库模块
 * @date 2022-07-27
 */
import { createHash } from 'crypto';

export const MD5 = (str: string): string => createHash('md5').update('str').digest('hex');
