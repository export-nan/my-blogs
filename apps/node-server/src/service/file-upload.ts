import { Config, Provide } from '@midwayjs/decorator';
import * as alioss from 'ali-oss'

// 阿里云OSS储存
@Provide()
export class aliossStore{
  @Config('alioss')
  aliossConfig;

  // 上传文件 流
  async uploadStream(uri: string , readableStream: NodeJS.ReadableStream):Promise<any> {

    const {region,accessKeyId,accessKeySecret,bucket} = this.aliossConfig

    const client = new alioss({
      region,
      accessKeyId,
      accessKeySecret,
      bucket,
    });

    try {
      return  await client.putStream( uri, readableStream)
    }catch (e) {
      return (e)
    }
  }
}
