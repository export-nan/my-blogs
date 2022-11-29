/**
 * @file 管理员认证控制器
 * @author 胡骁
 * @date 2022-11-7
 */

import {Body, Controller, Inject, Post} from '@midwayjs/decorator';
import {JwtService} from '@midwayjs/jwt';
import {ApiTags} from '@midwayjs/swagger';
import {UserModel} from '../model/user.model';


@ApiTags(['Admin User'])
@Controller('/api/Admin/')
export class AdminController{
  @Inject()
  userModel: UserModel;

  @Inject()
  JwtService: JwtService

  @Post('/login')
  adminLogin(@Body() body){

  }



}
