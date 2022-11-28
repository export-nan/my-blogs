/**
 * @file 用户表模型
 * @author 胡骁
 * @date 2022.07.27
 */

import {Provide} from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { FileStoreEntity } from '@nan/db-entities';
import { Repository } from 'typeorm';
import { BaseModel } from './base.model';

@Provide()
export class FileStoreModel extends BaseModel<FileStoreEntity> {
  @InjectEntityModel(FileStoreEntity)
  repo: Repository<FileStoreEntity>;
}
