import { FILE_EXT } from '../regex'

//
export const getFileExt = (fileName: string): string => fileName.match(FILE_EXT)[0];

export const splitFileName = (fileName: string): string => fileName.replace(FILE_EXT,'');
