/**
 * @file: 登录控制器
 * @author: 胡骁
 * @date: 2022-07-27
 */

import {Controller, Inject} from '@midwayjs/decorator';
import { JwtService } from '@midwayjs/jwt';
import { ApiTags } from '@midwayjs/swagger';
import { UserModel } from '../model/user.model';

@ApiTags(['User'])
@Controller('/api/user/login')
export class LoginControoller {
  @Inject()
  userMode: UserModel;
  @Inject()
  jwtService: JwtService;

}
