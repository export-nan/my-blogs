import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {BaseEntity} from './base_entity';

@Entity('tc_file_store', { schema: 'nan-db' })
export class FileStoreEntity extends BaseEntity{
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'file-store-id',
    comment: '文件储存表自增ID',
  })
  fileStoreId: number;
  @Column('bigint', {
    name: 'user-id',
    comment: '用户ID',
    nullable: true,
  })
  userId?: string;
  @Column('varchar', {
    name: 'file-name',
    comment: '文件名'
  })
  fileName: string;
  @Column('varchar', {
    name: 'file-type',
    comment: '文件类型',
    length: 20
  })
  fileType: string;
  @Column('varchar', {
    name: 'hash-code',
    comment: '文件唯一hash值',
    length: 64
  })
  hashCode: string;
  @Column('varchar', {
    name: 'store-uri',
    comment: '文件相对Store路径'
  })
  storeUri: string;
}
