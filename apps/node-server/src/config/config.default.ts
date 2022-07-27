import { MidwayConfig } from '@midwayjs/core';
import * as dbEntities from '@nan/db-entities';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1658890529049_1740',
  koa: {
    port: 7001,
  },
  orm: {
    type: 'mysql',
    host: 'rm-bp1l12qy1dz36p714bo.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'my_web_server',
    password: 'Admin@123',
    database: 'bthy',
    bigNumberStrings: false, // bigint查询出来不要变成字符串
    synchronize: true, // 是否同步实体到数据库
    logging: false, // 是否开启sql日志
    timezone: '+08:00',
    dateStrings: true, // 时间日期格式化
    supportBigNumbers: true, // 是否支持处理数据库中的大数字（BIGINT和DECIMAL列）
    entities: dbEntities,
  },
  jwt: {
    secret: '@nan/jwt',
    expiresIn: '2d',
  },
  swagger: {
    // see https://swagger.io/specification/
    // 默认值: My Project
    // https://swagger.io/specification/#info-object title 字段
    title: '@nan/node-server',

    // 默认值: This is a swagger-ui for midwayjs project
    // https://swagger.io/specification/#info-object description 字段
    description: '@nan接口',

    // 默认值: 1.0.0
    // https://swagger.io/specification/#info-object version 字段
    version: '1.0.0',

    // https://swagger.io/specification/#info-object contact 字段
    // contact?: ContactObject;

    // https://swagger.io/specification/#info-object license 字段
    // license: 'MIT',

    // https://swagger.io/specification/#info-object termsOfService 字段
    // termsOfService?: string;

    // https://swagger.io/specification/#openapi-object externalDocs 字段
    // externalDocs?: ExternalDocumentationObject;

    // https://swagger.io/specification/#openapi-object servers 字段
    // servers?: Array<ServerObject>;

    // https://swagger.io/specification/#openapi-object tags 字段
    tags: [
      {
        name: 'User',
        description: '用户接口',
      },
    ],

    // 默认值: /swagger-ui
    // 访问 swagger ui 的路径
    swaggerPath: 'swagger',

    // 对路由 tag 进行 ascii 排序
    // 可以使用 1-xxx、2-xxx、3-xxx 来定义 tag
    tagSortable: true,

    // 可以参考 https://swagger.io/specification/#security-scheme-object
    auth: {
      // 验权类型
      // basic  => http basic 验证
      // bearer => http jwt 验证
      // cookie => cookie 方式验证
      // oauth2 => 使用 oauth2
      // apikey => apiKey
      // custom => 自定义方式

      authType: 'bearer',
      description: '可用token: ',
      // https://swagger.io/specification/#security-scheme-object type 字段
      // type?: SecuritySchemeType;
      // authType = cookie 时可以修改，通过 ApiCookie 装饰器关联的名称
      // securityName?: string;
      // authType = cookie 时可以修改，cookie 的名称
      // cookieName?: string;
    },
    // contact: {
    //   name: 'XXX',
    //   email: 'XXXXXX@gmail.com',
    // },
    // UI 展示中需要用到的配置
    // 可以参考 https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/configuration.md#display
    displayOptions: {
      docExpansion: JSON.stringify('none'),
    },
  },
} as MidwayConfig;
