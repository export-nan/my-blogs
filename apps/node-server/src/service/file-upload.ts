import { Config, Provide } from '@midwayjs/decorator';
import * as qiniu from 'qiniu'
import * as dayjs from 'dayjs';

type TfileInof = {
  name: string;
  type: string;
  category: string;
}

// 七牛云储存
@Provide()
export class qiniuStore{
  @Config('qiniu')
  qiniuConfig;

  // 获取储存token
  getToken(): string{
    const {AK : accessKey, SK : secretKey, store} = this.qiniuConfig
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const putPolicy = new qiniu.rs.PutPolicy({
      scope: store,
    });
    return putPolicy.uploadToken(mac);
  }

  // 上传文件
  async upload(fileInof: TfileInof , readableStream: NodeJS.ReadableStream) {
    const nowDate = dayjs()
    const cf = new qiniu.conf.Config()
    const token = this.getToken()
    const formUploader = new qiniu.form_up.FormUploader(cf);
    const putExtra = new qiniu.form_up.PutExtra();
    const key = fileInof.category+'/'+nowDate.format('YYYY/MM/DD')+'/'+fileInof.name
    return new Promise((resolve, reject) => {
      formUploader.putStream(token, key, readableStream, putExtra, function(respErr,
        respBody, respInfo) {
        if (respErr) {
          console.log(respErr,'aaa');
          throw respErr;
        }

        if( respInfo.statusCode === 200 ){
          resolve(respInfo)
        }else{
          reject(respInfo)
        }
      });
    })
  }
}
