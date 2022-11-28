import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {BaseEntity} from './base_entity';

@Entity('tc_post_content', { schema: 'nan-db' })
export class PostContentEntity extends BaseEntity{
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'postContentId',
    comment: '文章内容自增ID',
  })
  postContentId: number;
  @Column('bigint', {
    name: 'user-id',
    comment: '文章帖子ID',
  })
  postId?: string;
  @Column({
    type: 'varchar',
    name: 'content',
    comment: '内容',
    length: 255
  })
  content: string;
  // @Column({
  //   type: 'varchar',
  //   name: 'type',
  //   comment: '类型',
  // })
  // type: string
  @Column({
    type: 'varchar',
    name: 'hashCode',
    comment: '类容的唯一hash值，用于更新类容',
    length: 64,
  })
  hashCode: string;
  @Column({
    type: 'int',
    name: 'order',
    comment: '顺序',
  })
  order: number;
}
