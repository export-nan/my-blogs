import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {BaseEntity} from './base_entity';

@Entity('tc_post', { schema: 'nan-db' })
export class PostEntity extends BaseEntity{
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'post-id',
    comment: '文章帖子自增ID',
  })
  postId: number;
  @Column('bigint', {
    name: 'user-id',
    comment: '发布的用户ID',
    nullable: true,
  })
  userId?: string;
  @Column('varchar', {
    name: 'title',
    comment: '标题'
  })
  title: string;
  @Column({
    type: 'boolean',
    name: 'publish',
    comment: '是否发布',
  })
  publish: boolean;
}
