/**
 * @file user表模型dto
 * @author NAN
 * @date 2022-11-07
*/
import {Rule, RuleType} from '@midwayjs/validate';
import {DTOParameterError} from '@nan/common'

export class UserEntityDto{
  @Rule(RuleType.number().required().error(new DTOParameterError('userId')))
  userId: number

  @Rule(RuleType.string().required().error(new DTOParameterError('email')))
  email: string

  @Rule(RuleType.string().required().error(new DTOParameterError('role')))
  role: string
}

