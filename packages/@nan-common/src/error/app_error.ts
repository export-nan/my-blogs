/**
 * @file 项目的错误信息文件
 * @author 老船长
 * @date 2022.06.18
 */

export type T_AppErrorType = [errorCode: number, errorMessage: string];

// 返回错误消息常量
export const APP_ERROR_TYPES: {[key: string]: T_AppErrorType} = {
  // @TODO 参考 https://www.runoob.com/http/http-status-codes.html 完善以下的错误信息
  HTTP_CONTINUE: [100, '继续，客户端应继续其请求'],
  // HTTP_STATUS: [101, 'SWITCHING PROTOCOLS'],
  // HTTP_STATUS: [102, 'PROCESSING'],
  // HTTP_STATUS: [103, 'EARLY HINTS'],

  // HTTP_STATUS: [200, 'OK'],
  // HTTP_STATUS: [201, 'CREATED'],
  // HTTP_STATUS: [202, 'ACCEPTED'],
  // HTTP_STATUS: [203, 'NON-AUTHORITATIVE INFORMATION'],
  // HTTP_STATUS: [204, 'NO CONTENT'],
  // HTTP_STATUS: [205, 'RESET CONTENT'],
  // HTTP_STATUS: [206, 'PARTIAL CONTENT'],
  // HTTP_STATUS: [207, 'MULTI-STATUS'],
  // HTTP_STATUS: [208, 'ALREADY REPORTED'],
  // HTTP_STATUS: [226, 'IM USED'],

  // HTTP_STATUS: [300, 'MULTIPLE CHOICES'],
  // HTTP_STATUS: [301, 'MOVED PERMANENTLY'],
  // HTTP_STATUS: [302, 'FOUND (PREVIOUSLY "MOVED TEMPORARILY")'],
  // HTTP_STATUS: [303, 'SEE OTHER'],
  // HTTP_STATUS: [304, 'NOT MODIFIED'],
  // HTTP_STATUS: [305, 'USE PROXY'],
  // HTTP_STATUS: [306, 'SWITCH PROXY'],
  // HTTP_STATUS: [307, 'TEMPORARY REDIRECT'],
  // HTTP_STATUS: [308, 'PERMANENT REDIRECT'],

  HTTP_BAD_REQUEST: [400, '客户端请求的语法错误，服务器无法理解'],
  HTTP_UNAUTHORIZED: [401, '没有授权'],
  // HTTP_STATUS: [402, 'PAYMENT REQUIRED'],
  // HTTP_STATUS: [403, 'FORBIDDEN'],
  HTTP_NOT_FOUND: [404, '服务器无法根据客户端的请求找到资源'],

  // HTTP_STATUS: [405, 'METHOD NOT ALLOWED'],
  // HTTP_STATUS: [406, 'NOT ACCEPTABLE'],
  // HTTP_STATUS: [407, 'PROXY AUTHENTICATION REQUIRED'],
  // HTTP_STATUS: [408, 'REQUEST TIMEOUT'],
  // HTTP_STATUS: [409, 'CONFLICT'],
  // HTTP_STATUS: [410, 'GONE'],
  // HTTP_STATUS: [411, 'LENGTH REQUIRED'],
  // HTTP_STATUS: [412, 'PRECONDITION FAILED'],
  // HTTP_STATUS: [413, 'PAYLOAD TOO LARGE'],
  // HTTP_STATUS: [414, 'URI TOO LONG'],
  // HTTP_STATUS: [415, 'UNSUPPORTED MEDIA TYPE'],
  // HTTP_STATUS: [416, 'RANGE NOT SATISFIABLE'],
  // HTTP_STATUS: [417, 'EXPECTATION FAILED'],
  // HTTP_STATUS: [418, "I'M A TEAPOT"],
  // HTTP_STATUS: [421, 'MISDIRECTED REQUEST'],
  // HTTP_STATUS: [422, 'UNPROCESSABLE ENTITY'],
  // HTTP_STATUS: [423, 'LOCKED'],
  // HTTP_STATUS: [424, 'FAILED DEPENDENCY'],
  // HTTP_STATUS: [425, 'TOO EARLY'],
  // HTTP_STATUS: [426, 'UPGRADE REQUIRED'],
  // HTTP_STATUS: [428, 'PRECONDITION REQUIRED'],
  // HTTP_STATUS: [429, 'TOO MANY REQUESTS'],
  // HTTP_STATUS: [431, 'REQUEST HEADER FIELDS TOO LARGE'],
  // HTTP_STATUS: [451, 'UNAVAILABLE FOR LEGAL REASONS'],

  HTTP_INTERNAL_SERVER_ERROR: [500, '系统内部异常'],
  // HTTP_STATUS: [501, 'NOT IMPLEMENTED'],
  // HTTP_STATUS: [502, 'BAD GATEWAY'],
  // HTTP_STATUS: [503, 'SERVICE UNAVAILABLE'],
  // HTTP_STATUS: [504, 'GATEWAY TIMEOUT'],
  // HTTP_STATUS: [505, 'HTTP VERSION NOT SUPPORTED'],
  // HTTP_STATUS: [506, 'VARIANT ALSO NEGOTIATES'],
  // HTTP_STATUS: [507, 'INSUFFICIENT STORAGE'],
  // HTTP_STATUS: [508, 'LOOP DETECTED'],
  // HTTP_STATUS: [510, 'NOT EXTENDED'],
  // HTTP_STATUS: [511, 'NETWORK AUTHENTICATION REQUIRED'],

  UNKNOWN_INTERNAL_SERVER_ERROR: [600, '系统内部未知异常'],
  TYPE_ERROR: [601, '变量类型错误'],

  TYPEORM_SQL_ERROR: [700, 'TypeORM的SQL语句错误'],
  TYPEORM_ENTITY_PROPERTY_NOT_FOUND_ERROR: [701, 'TypeORM的Entity里不存在此字段'],

  DEFAULT_RESPONSE_ERROR: [900, '默认返回错误信息'],
  API_PARAMETER_INVALID: [1000, '接口参数校验错误'],
  DTO_PARAMETER_INVALID: [1001, 'DTO传参错误'],

  // 鉴权
  NO_AUTHORIZATION: [1100, '没有登录授权'],
  VERIFY_TOKEN_ERROR: [1200, 'TOKEN不合法'],
  TOKEN_INVALID: [1201, 'Token已失效，请重新登录'],

  TOKEN_EXPIRED: [1300, '登录凭证过期，请重新登录'],
  NOT_PERMISSION: [1400, '权限不足'],
  NO_ACCESS_PERMISSION: [1500, '没有访问权限'],
  NO_ROUTE_ACCESS_PERMISSION: [1600, '没有路由访问权限'],

};

/**
 * 应用的错误类
 * @param appErrorType 应用错误类型
 */
export class AppError extends Error {
  public code: number;

  public message: string;

  public name = 'AppError';

  constructor(appErrorType: T_AppErrorType) {
    super(appErrorType[1]);

    const [code, message] = appErrorType;

    this.code = code;
    this.message = message;
  }
}

/**
 * DTO传参错误类
 * @param parameterName 错误参数的名称
 * @param parameterErrorHint? 参数错误的原因提示
 */
export class DTOParameterError extends AppError {
  public name = 'DTOParameterError';

  public parameterName: string;

  public parameterErrorHint: string;

  constructor(parameterName: string, parameterErrorHint?: string) {
    super(APP_ERROR_TYPES.DTO_PARAMETER_INVALID);

    // 执行动态Error Message，带上具体的错误参数名称
    this.parameterName = parameterName;

    // 执行动态Error Message，参数错误原因提示
    if (parameterErrorHint) {
      this.parameterErrorHint = parameterErrorHint;
    }
  }
}
