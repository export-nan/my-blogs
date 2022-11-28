/**
 * @file 文章管理
 * @author NAN
 * @date 2022-10-25
 * */

import { Inject, Provide } from '@midwayjs/decorator';
import {DeepPartial} from 'typeorm';
import {PostContentEntity} from '../../../../packages/@nan-db';
import {PostContentModel} from '../model/post-content.model';
import {PostModel} from '../model/post.model';

@Provide()
export class PostManage{
  @Inject()
  postModel: PostModel

  @Inject()
  postContentModel: PostContentModel

  /**新建文章
   * TODO: 未添加userId
   * @param title {string} 文章标题
   *  */
  async createPost(title:string,content:any,publish:boolean=false):Promise<any> {
    const postReq = await this.postModel.createOne({title,publish})
    const postContentList:DeepPartial<PostContentEntity>[] = content.map((itme,key) =>({
      postId: postReq.postId,
      content: itme.content,
      hashCode: itme.hashCode,
      order: key,
    }))
    console.log(postContentList);

    await this.postContentModel.createMany(postContentList)
  }

}
