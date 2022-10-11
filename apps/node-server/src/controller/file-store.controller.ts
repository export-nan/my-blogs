/**
 * @file: 文件储存控制器
 * @author: 胡骁
 * @date: 2022-10-10
 */

import {Controller, Files, Inject, Post} from '@midwayjs/decorator';
import { ApiTags } from '@midwayjs/swagger';
import { qiniuStore } from '../service/file-upload'
// import {getReadStreamHash} from '../utils/file';

@ApiTags(['FileStore'])
@Controller('/api/upload/fileStore')
export class FileStoreControoller {
  @Inject()
  uploadStore: qiniuStore

  @Post('/')
  async upload (@Files() files) {
    // const fsHash = await getReadStreamHash(files[0].data,{algorithm: 'sha256'});

    return await this.uploadStore.upload({
      category: 'images',
      type: files[0].mimeType,
      name: files[0].filename
    },files[0].data)
  }
}
