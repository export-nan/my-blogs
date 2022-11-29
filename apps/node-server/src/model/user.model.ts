/**
 * @file 用户表模型
 * @author 胡骁
 * @date 2022.07.27
 */

import { InjectEntityModel } from '@midwayjs/orm';
import { UserEntity } from '@nan/db-entities';
import { Repository } from 'typeorm';
import { BaseModel } from './base.model';

export class UserModel extends BaseModel<UserEntity> {
  @InjectEntityModel(UserEntity)
  repo: Repository<UserEntity>;

  // 查找一个用户
  public async readOneUser(where): Promise<UserEntity> {
    const ret = super.readOne(where);
    return ret;
  }

}
