import request from './base/request';

export const getFileStoreList = () => request.get('/api/upload/list')
