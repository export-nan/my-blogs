## Get Started

快速开始，本地开发运行

1. 项目要求使用 node v16.15.1 和 npm v8.11.0 和 pnpm 7.5.1 版本

```
// 安装 node v16.15.1 和 npm v8.11.0
$ nvm install v16.15.1
$ nvm use 16.15.1
$ nvm alias node 16.15.1
$ nvm alias stable 16.15.1
$ nvm alias default 16.15.1

// 安装 pnpm 7.5.1
$ npm install --global pnpm@7.5.1
```

4. 安装项目依赖包

```
$ pnpm install
```

5. 在本地启动后端 node 项目

```
// 进入后端Midway框架代码子目录，运行 dev 命令
$ cd apps/front-circle-node-server/
$ pnpm dev

// 或者，在根目录，运行 front-circle-node-server 包的 dev 命令
$ pnpm --filter @qiduoduo-inc/front-circle-node-server dev

// 然后在浏览器，打开Swagger，查看接口列表
$ open http://localhost:9000/swagger/index.html
```

6. 在本地启动前端 PC 项目

```
// 进入前端Vue框架代码子目录，运行 dev 命令
$ cd apps/front-circle-pc/
$ pnpm dev

// 或者，在根目录，运行 front-circle-pc 包的 dev 命令
$ pnpm --filter @qiduoduo-inc/front-circle-pc dev

// 然后在浏览器，打开页面
$ open http://localhost:8080/
```

# PNPM 的相关命令

```
// 给根目录添加一个依赖/开发依赖
$ pnpm --workspace-root add lodash
$ pnpm --workspace-root add lodash --save-dev

// 给某个包添加一个依赖/开发依赖
$ pnpm --filter @qiduoduo-inc/front-circle-db add lodash
$ pnpm --filter @qiduoduo-inc/front-circle-db add lodash --save-dev

// 给根目录及所有的包都添加一个依赖/开发依赖
$ pnpm add lodash --recursive

// 安装所有包的依赖
$ pnpm install
或
$ pnpm install --recursive

// 只安装根目录的依赖
$ pnpm install --workspace-root
```

## Other Comands

其他命令

```
// 批量删除项目里所有包的 node_modules 目录
$ find . -name "node_modules" -type d -exec rm -rf {} +

// 批量删除项目里所有包的 dist 目录
$ find . -name "dist" -type d -exec rm -rf {} +
```
