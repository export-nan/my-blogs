/**
 * @file 文章表模型
 * @author 胡骁
 * @date 2022.07.27
 */

 import {Provide} from '@midwayjs/decorator';
 import { InjectEntityModel } from '@midwayjs/orm';
 import { PostEntity } from '@nan/db-entities';
 import { Repository } from 'typeorm';
 import { BaseModel } from './base.model';

 @Provide()
 export class PostModel extends BaseModel<PostEntity> {
   @InjectEntityModel(PostEntity)
   repo: Repository<PostEntity>;
 }
