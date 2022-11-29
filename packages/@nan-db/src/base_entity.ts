import {Column} from 'typeorm';

export class BaseEntity {
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

  constructor() {
    this.valueOf();
  }
}
