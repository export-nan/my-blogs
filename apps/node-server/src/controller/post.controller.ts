/**
 *  @file 文章控制器
 *  @author NAN
 *  @date 2022-10-14
 */


/**
 * @file: 文件储存控制器
 * @author: 胡骁
 * @date: 2022-10-10
 */

import {Controller, Files, Inject, Post} from '@midwayjs/decorator';
import { ApiTags } from '@midwayjs/swagger';
import * as crypto from 'crypto';
// import {APP_ERROR_TYPES, ErrorResponse} from '@nan/common';
import {getReadStreamContent} from '../utils/file';
import { PostModel } from '../model/post.model';
import {PostManage} from '../service/post-manage';
import {ErrorResponse} from '@nan/common';

@ApiTags(['FileStore'])
@Controller('/api/post')
export class FileStoreControoller {


  @Inject()
  postModel: PostModel

  @Inject()
  postManage: PostManage

  // 上传markdown文件
  @Post('/upload-md')
  async upload (@Files() files) {
    const file = files[0]

    // // 判断文件格式是否正确
    // if (!['text/markdown'].includes(file.mimeType)){
    //   const [code, message] =  APP_ERROR_TYPES.HTTP_BAD_REQUEST
    //   return new ErrorResponse({ message, code})
    // }
    // 获取文件类容
    const postContent = await getReadStreamContent(file.data)
    const postTitle = file.filename

    //如果文章内容为空 直接返回 ‘内容空’
    if(postContent.length===0){
      return new ErrorResponse({message: '未读取到文件内容', code: 404})
    }

    // 对文件类容进行切片
    const postSlice:{content:string,hashCode:string}[] = []
    for (let i = 0, l =  postContent.length, f=255; i < l/f; i++) {
      const content = postContent.slice(f*i,f*(i+1))
      const hashCode = crypto.createHash('sha256').update(content).digest('hex');
      postSlice.push({content,hashCode})
    }

    // 判断文章是否存在
    const postReq = await this.postModel.readOne({where:{title: postTitle}})
    if(postReq){
      // 覆盖文章
    }else{
      // 新建文章
      console.log('aaa');

      this.postManage.createPost(postTitle,postSlice)
    }

    return postSlice
  }
}
