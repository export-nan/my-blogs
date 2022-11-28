/**
 * @file 基类模型
 * @author 胡骁
 * @date 2022.07.27
 */

import { Provide } from '@midwayjs/decorator';
import { DeleteResult, FindManyOptions } from 'typeorm';
import { Repository, DeepPartial, FindOneOptions } from 'typeorm';

@Provide()
export abstract class BaseModel<EN> {
  public Entity: EN;

  protected abstract repo: Repository<EN>;

  constructor(Entity: EN) {
    if (Entity) {
      this.Entity = Entity;
    }
  }

  // 创建一个
  public async createOne(body: DeepPartial<EN>): Promise<EN> {
    const ret = await this.repo.save(body);
    return ret;
  }
  // 创建多个
  public async createMany(entityBodyList: DeepPartial<EN>[]) {
    const res = await this.repo.save(entityBodyList);
    return res;
  }
  // 删除一个
  public async deleteOne(entityId: number | string): Promise<DeleteResult> {
    const ret = await this.repo.delete(entityId);
    return ret;
  }
  // 移除一个
  public async remove(body) {
    const ret = await this.repo.remove(body);
    return ret;
  }
  // 更改一个
  public async update(body) {
    const ret = await this.repo.save(body);
    return ret;
  }
  // 读取一个
  public async readOne(body: FindOneOptions<EN>) {
    const ret = await this.repo.findOne(body);
    return ret;
  }
  // 读取多个
  public async readMany(body: FindManyOptions<EN>) {
    const ret = await this.repo.find(body)
    return ret;
  }

}
