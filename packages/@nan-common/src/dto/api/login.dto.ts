/**
 * @file 用户登录接口传输模型
 * @date 2022.07.21
 */
import { ApiProperty } from '@midwayjs/swagger';
import { Rule, RuleType } from '@midwayjs/validate';
export class LoginReqDTO {
  @ApiProperty({ required: true, type: 'string', description: '邮箱' })
  @Rule(RuleType.string())
  email: string;
  @ApiProperty({ required: true, type: 'string', description: '密码' })
  @Rule(RuleType.string())
  password: string;
}

export class LoginResDTO {
  @ApiProperty({ required: true, type: 'string', description: '邮箱' })
  @Rule(RuleType.string())
  email: string;
  @ApiProperty({ required: true, type: 'string', description: 'token' })
  @Rule(RuleType.string())
  token: string;
}
