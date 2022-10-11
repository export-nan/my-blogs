/**
 * @file: user表实体文件
 *
 *
 */
import { Column, Index, PrimaryGeneratedColumn } from 'typeorm';
import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from './base_entity';

@Index('email_index', ['email'], {})
@EntityModel('tc_user', { schema: 'nan-db' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
    comment: '用户表自增ID',
  })
  userId: number;
  @Column('varchar', {
    name: 'email',
    comment: '用户邮箱',
    length: 64,
  })
  email: string;
}
