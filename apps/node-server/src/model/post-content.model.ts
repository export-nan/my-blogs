/**
 * @file 文章内容表模型
 * @author 胡骁
 * @date 2022.10.25
 */

 import {Provide} from '@midwayjs/decorator';
 import { InjectEntityModel } from '@midwayjs/orm';
 import { PostContentEntity } from '@nan/db-entities';
 import { Repository } from 'typeorm';
 import { BaseModel } from './base.model';

 @Provide()
 export class PostContentModel extends BaseModel<PostContentEntity> {
   @InjectEntityModel(PostContentEntity)
   repo: Repository<PostContentEntity>;
 }
