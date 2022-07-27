/**
 * @file: user表实体文件
 *
 *
 */
import { Column, Index, PrimaryGeneratedColumn } from 'typeorm';
import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from './base_entity';

@Index('email_index', ['email'], {})
@EntityModel('tc_user', { schema: 'bthy' })
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
  @Column('varchar', {
    name: 'password',
    comment: '用户密码',
    length: 64,
  })
  password: string;
  @Column('datetime', {
    name: 'createTime',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column('datetime', {
    name: 'updateTime',
    comment: '更新时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date;

  @Column('tinyint', {
    name: 'is_del',
    comment: '删除标志 0未删除 1已删除',
    default: () => "'0'",
  })
  isDel: number;
}
