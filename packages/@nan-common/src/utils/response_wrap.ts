/**
 * @file 接口的响应数据格式函数封装
 * @author 老船长
 * @date 2022.06.09
 */

import { AppError, APP_ERROR_TYPES, T_AppErrorType, DTOParameterError } from '../error';

export type TResponseData = object;

/**
 * 响应对象接口定义
 */
export interface IResponse {
  code: number;
  msg: string;
  result: string;
}

/**
 * 成功响应对象接口定义
 */
export interface ISuccessResponse<TData> extends IResponse {
  data: TData;
}

/**
 * 失败响应对象接口定义
 */
export interface IErrorResponse extends IResponse {
  data: null;
}

/**
 * 响应类
 */
export class Response implements IResponse {
  public code = 0;

  public msg = '';

  public result = '';
}

/**
 * 成功响应类
 */
export class SuccessResponse<TData> extends Response implements ISuccessResponse<TData> {
  public code = 200;

  public msg = 'success';

  public data: TData;

  public result = 'success';

  constructor(data?: TData) {
    super();

    if (data) {
      this.data = data;
    } else {
      this.data = null;
    }
  }
}

export type ErrorResponseOption = {
  code: number;
  message: string;
  name?: string;
  info?: string;
  stack?: string;
  cause?: unknown;
  error?: unknown;
};

/**
 * 错误响应类
 */
export class ErrorResponse extends Response implements IErrorResponse {
  public code = APP_ERROR_TYPES.DEFAULT_RESPONSE_ERROR[0];

  public msg = APP_ERROR_TYPES.DEFAULT_RESPONSE_ERROR[1];

  public data: null = null;

  public result = 'error';

  // 错误名称
  public name: string;

  // 额外的错误补充信息
  public info: string;

  // 错误所在处的代码回调路径
  public stack: string;

  // 引起错误的Error
  public cause: unknown;

  // 错误对象实例
  public error: unknown;

  constructor(option: ErrorResponseOption) {
    super();

    this.code = option.code;
    this.msg = option.message;

    if (option.name) {
      this.name = option.name;
    }

    if (option.info) {
      this.info = option.info;
    }

    if (option.stack) {
      this.stack = option.stack;
    }

    if (option.cause) {
      this.cause = option.cause;
    }

    if (option.error) {
      this.error = option.error;
    }
  }
}

/**
 * 应用错误响应类
 */
export class AppErrorResponse extends ErrorResponse {
  constructor(appError: AppError) {
    super({
      code: appError.code,
      message: appError.message,
    });

    // 如果是DTO传参错误，多给一些错误信息到前端
    if (appError instanceof DTOParameterError) {
      if (appError.parameterName) {
        this.info = `错误字段：${appError.parameterName}`;
      } else {
        this.info = '错误字段：未定义';
      }

      if (appError.parameterErrorHint) {
        this.info = `${this.info}，错误提示：${appError.parameterErrorHint}`;
      }
    }
  }
}

export const response = {
  /**
   * 快捷成功响应调用函数
   * @param data Object | String 响应数据
   */
  success: (data?: any) => {
    // 如果没有传参数据，则生成默认成功返回对象数据
    if (typeof data === 'undefined') {
      return new SuccessResponse({ result: 'success' });
    }

    // 如果传参的数据是字符串类型，则自动转换为对象数据
    if (typeof data === 'string') {
      return new SuccessResponse({ result: data });
    }

    return new SuccessResponse(data);
  },

  /**
   * 快捷失败响应调用函数
   * @param appErrorType {T_AppErrorType} 应用错误
   */
  error: (appErrorType: T_AppErrorType) => new AppErrorResponse(new AppError(appErrorType)),
};
