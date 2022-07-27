/**
 * @file: 登录控制器
 * @author: 胡骁
 * @date: 2022-07-27
 */

import { Body, Controller, Inject, Post } from '@midwayjs/decorator';
import { JwtService } from '@midwayjs/jwt';
import { ApiTags } from '@midwayjs/swagger';
import { Validate } from '@midwayjs/validate';
import {
  ErrorResponse,
  IErrorResponse,
  ISuccessResponse,
  LoginReqDTO,
  LoginResDTO,
  MD5,
  SuccessResponse,
} from '@nan/common';
import { UserModel } from '../model/user.model';

@ApiTags(['User'])
@Controller('/api/user/login')
export class LoginControoller {
  @Inject()
  userMode: UserModel;
  @Inject()
  jwtService: JwtService;

  // 邮箱验证登录
  @Post('/email')
  @Validate()
  async login(
    @Body() body: LoginReqDTO
  ): Promise<ISuccessResponse<LoginResDTO> | IErrorResponse> {
    const { email, password } = body;
    const userInfo = await this.userMode.readOne({ email });
    if (userInfo && userInfo.password === MD5(password)) {
      const token = await this.jwtService.sign(userInfo);
      return new SuccessResponse({
        email: userInfo.email,
        token,
      });
    } else {
      return new ErrorResponse({ code: 403, message: '用户名或密码错误' });
    }
  }
}
