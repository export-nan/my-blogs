/**
 * @file: 文件储存控制器
 * @author: 胡骁
 * @date: 2022-10-10
 */

import {Body, Controller, Files, Get, Inject, Post} from '@midwayjs/decorator';
import { ApiTags } from '@midwayjs/swagger';
import { aliossStore } from '../service/file-upload'
import {APP_ERROR_TYPES, ErrorResponse, SuccessResponse} from '@nan/common';
import {getReadStreamHash} from '../utils/file';
import { FileStoreModel } from '../model/file-store.model';
import { fileUtils } from '@nan/utils'
import * as dayjs from 'dayjs';
@ApiTags(['FileStore'])
@Controller('/api/upload')
export class FileStoreControoller {
  @Inject()
  uploadStore: aliossStore

  @Inject()
  fileStoreModel: FileStoreModel

  // 上传图片文件
  @Post('/image')
  async upload (@Files() files) {

    const file = files[0]

    console.log(file.data);


    // 判断文件格式是否正确
    if (!['image/png','image/jpg','image/jpeg','image/webp'].includes(file.mimeType)){
      const [code, message] =  APP_ERROR_TYPES.HTTP_BAD_REQUEST
      return new ErrorResponse({ message, code})
    }

    // 获取文件hashCode
    const fileHash = await getReadStreamHash(file.data,{algorithm: 'sha256'});

    // 检查文件是否已上传过
    const fileRepo = await this.fileStoreModel.readOne({where: { hashCode: fileHash }});
    if(fileRepo){
      return new SuccessResponse(fileRepo)
    }

    // 上传至云储存
    const nowDate = dayjs()
    const fileDir = 'fileStore/' + nowDate.format('YYYY-MM-DD')
    const fileName = fileUtils.splitFileName(file.filename) + '/' + new Date().getTime() + fileUtils.getFileExt( file.filename )
    const fileKey = fileDir + '/' + fileName
    const alioss = await this.uploadStore.uploadStream(fileKey,files[0].data)
    if( alioss.res.status !== 200 ){
      return new ErrorResponse({ message: '上传失败', code: 404})
    }

    // 数据保存到数据库
    const repo = await this.fileStoreModel.createOne({
      fileName: file.filename,
      hashCode: fileHash,
      fileType: file.mimeType,
      storeUri: fileKey
    })

    return new SuccessResponse(repo)
  }

  // 获取文件列表
  @Get('/list')
  async fetchMany(@Body() body?: any ){
    const res = await this.fileStoreModel.readMany(body)
    return new SuccessResponse(res)
  }
}
