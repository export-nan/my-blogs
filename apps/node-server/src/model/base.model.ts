/**
 * @file 基类模型
 * @author 胡骁
 * @date 2022.07.27
 */

import { Provide } from '@midwayjs/decorator';
import { DeleteResult } from 'typeorm';
import { Repository, DeepPartial } from 'typeorm';

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
  public async readOne(body) {
    const ret = await this.repo.findOne(body);
    return ret;
  }
}
