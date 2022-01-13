# NodeSDK更新日志

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.5.0](https://github.com/tencent-connect/bot-node-sdk/compare/v2.4.0...v2.5.0) (2022-01-12)


### Features

* 完善intents事件 ([fdd8569](https://github.com/tencent-connect/bot-node-sdk/commit/fdd8569ab3c7256ceb0125f62a60f45544f3f1ac))

## [2.4.0](https://github.com/tencent-connect/bot-node-sdk/compare/v2.3.0...v2.4.0) (2022-01-12)


### Features

* 获取频道列表参数补齐 ([bbfc4e7](https://github.com/tencent-connect/bot-node-sdk/commit/bbfc4e72c9766a1487089cfda4f0897dbb53eb08))
* 扩展创建子频道参数，支持创建私密子频道 ([38ee7a4](https://github.com/tencent-connect/bot-node-sdk/commit/38ee7a42237d0deb7ae70a8ca2aeb2d826fe8d16))

## [2.3.0](https://github.com/tencent-connect/bot-node-sdk/compare/v2.2.0...v2.3.0) (2022-01-11)


### Features

* 添加日程API ([ad05262](https://github.com/tencent-connect/bot-node-sdk/commit/ad05262947b045c93dd68502f7f74c0c0bf7d478))

## [2.2.0](https://github.com/tencent-connect/bot-node-sdk/compare/v2.1.0...v2.2.0) (2022-01-08)


### Features

* 添加公告API ([dfd33c9](https://github.com/tencent-connect/bot-node-sdk/commit/dfd33c97b1475278c258cb3d992dcbc0108d839b))

## [2.1.0](https://github.com/tencent-connect/bot-node-sdk/compare/v1.5.0...v2.1.0) (2022-01-08)


### Features

* 添加禁言API ([9d5e47b](https://github.com/tencent-connect/bot-node-sdk/commit/9d5e47bf56ad90358c4c8cba1ceb7dc18e765ad4))
* 重命名sdk ([5d7e22e](https://github.com/tencent-connect/bot-node-sdk/commit/5d7e22efb29c7d60a9432fb0d225db17415894fd))
* sdk中添加撤回消息API ([69058d6](https://github.com/tencent-connect/bot-node-sdk/commit/69058d6a8a4ad20fa634f9d89c58470f415b0459))


### Bug Fixes

* 修复MuteAPI返回类型问题 ([7ab3a8f](https://github.com/tencent-connect/bot-node-sdk/commit/7ab3a8f45de62f6d9bfd7ed29c706b4c7fefba5b))

## [2.0.0](https://github.com/tencent-connect/bot-node-sdk/compare/v1.5.0...v2.0.0) (2022-01-05)


### Features

* 重命名sdk ([f755cc0](https://github.com/tencent-connect/bot-node-sdk/commit/f755cc0584c75a90fa18ab32f76617373d93a445))

## [1.5.0](https://github.com/tencent-connect/bot-node-sdk/compare/v1.4.0...v1.5.0) (2022-01-01)


### Features

* 将类型定义导出到打包结果 ([99b2c57](https://github.com/tencent-connect/bot-node-sdk/commit/99b2c57642f386881b694d032605e538586566b6))

## [1.4.0](https://github.com/tencent-connect/bot-node-sdk/compare/v1.3.1...v1.4.0) (2022-01-01)


### Features

* 添加子频道身份组权限api(测试用例待补充)' ([400fc34](https://github.com/tencent-connect/bot-node-sdk/commit/400fc34232069f740a88af6e19113cf3b550a353))

### [1.3.1](https://github.com/tencent-connect/bot-node-sdk/compare/v1.3.0...v1.3.1) (2021-12-31)


### Features

* 异常返回带上traceid ([b151628](https://github.com/tencent-connect/bot-node-sdk/commit/b1516285bfe1ac3bed798266e5b40c7dcabf9900))

## [1.3.0](https://github.com/tencent-connect/bot-node-sdk/compare/v1.2.2...v1.3.0) (2021-12-30)


### Features

* 补充'身份组成员'接口传参方式 ([cb0ae47](https://github.com/tencent-connect/bot-node-sdk/commit/cb0ae47aea7c1edeebaec58d70e7f28f6a10417d))

### [1.2.2](https://github.com/tencent-connect/bot-node-sdk/compare/v1.2.0...v1.2.2) (2021-12-28)


### Bug Fixes

* err返回值兼容response.data不存在的情况 ([fe7c7cc](https://github.com/tencent-connect/bot-node-sdk/commit/fe7c7cce93869e9a7d360b052d64394a57fe84be))

### [1.2.1](https://github.com/tencent-connect/bot-node-sdk/compare/v1.2.0...v1.2.1) (2021-12-25)


### Bug Fixes

* err返回值兼容response.data不存在的情况 ([fe7c7cc](https://github.com/tencent-connect/bot-node-sdk/commit/fe7c7cce93869e9a7d360b052d64394a57fe84be))

## [1.2.0](https://github.com/tencent-connect/bot-node-sdk/compare/v1.1.2...v1.2.0) (2021-12-24)


### Features

* 修改shards与intents入参为可选 ([29d5c96](https://github.com/tencent-connect/bot-node-sdk/commit/29d5c961ee4fe11faea840264057ba8ddd4cb2da))


### Bug Fixes

* 修复ws模块拼写错误 ([dd3a85b](https://github.com/tencent-connect/bot-node-sdk/commit/dd3a85b97dcd044e679052e061d87ad1052939b7))
* 修改错误拼写 ([56a7270](https://github.com/tencent-connect/bot-node-sdk/commit/56a7270d86221354a846d0603ba2ea70ced78467))
* ws相关方法参数类型修复 ([2ed828d](https://github.com/tencent-connect/bot-node-sdk/commit/2ed828d95c6c9b1564524c3d3ca24d03ef6f7327))

### [1.1.2](https://github.com/tencent-connect/bot-node-sdk/compare/v1.1.0...v1.1.2) (2021-12-22)


### Bug Fixes

* 配置文件修改 ([ea84dd7](https://github.com/tencent-connect/bot-node-sdk/commit/ea84dd7c083258ea334d3792bbd141114b2266f2))
* 去除多余文件 ([ae367b4](https://github.com/tencent-connect/bot-node-sdk/commit/ae367b42d9a894fbf12baadf27b95a1cdde1caef))
* support for  passing  filter params when post & patch role ([1f66b6c](https://github.com/tencent-connect/bot-node-sdk/commit/1f66b6cf0ec3b7c903092e364365b9d738de2531))

### [1.1.1](https://github.com/tencent-connect/bot-node-sdk/compare/v1.1.0...v1.1.1) (2021-12-22)


### Bug Fixes

* support for  passing  filter params when post & patch role ([1f66b6c](https://github.com/tencent-connect/bot-node-sdk/commit/1f66b6cf0ec3b7c903092e364365b9d738de2531))
* 去除多余文件 ([ae367b4](https://github.com/tencent-connect/bot-node-sdk/commit/ae367b42d9a894fbf12baadf27b95a1cdde1caef))
* 配置文件修改 ([ea84dd7](https://github.com/tencent-connect/bot-node-sdk/commit/ea84dd7c083258ea334d3792bbd141114b2266f2))

## [1.1.0](https://git.woa.com/qq-channel-bot/bot-node-sdk/compare/v1.0.0...v1.1.0) (2021-12-09)


### Features

* 去除APPID/token等信息 ([9997c5b](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/9997c5b4a972cbb3c1e399f3ee6259594d8af587))
* 修改ws信息获取时的鉴权信息 ([bcd1521](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/bcd152139458243628b1582c7719c2878b09b4be))
* ws断线优化,事件分发优化 ([ccfab14](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/ccfab14faa843156c543e8526a1226df26d22622))

## 1.0.0 (2021-12-03)


### Features

* 代码优化 ([dc30d86](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/dc30d869c7b48f9bc3ad23afe2ddedb80fcb1e6e))
* 代码优化 ([65df46e](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/65df46e7c3615684385dbdfc631a305637f0bb0c))
* 底层会话优化 ([473b6f7](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/473b6f7f0b1ef90fcf4416ee84f5dca6c83ef74e))
* 功能优化 ([2a9545d](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/2a9545d2770da9b8b32bebbdeecf9a733cacc0d0))
* 会话优化 ([7c042a2](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/7c042a20d503ad6dedf833d837f418221445a157))
* 结构调整 ([b36bc04](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/b36bc0451addfc000fab37555f7d82c4f6050406))
* 添加单测用例 ([23581ef](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/23581ef2cf6e535a81c87da4fe13814c97fb64dd))
* 添加readme, 部分代码优化 ([08bc505](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/08bc505258c20a8b763bb18ce9f2fd5043704773))
* 心跳重连 ([67445ba](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/67445ba178cdc4c7be404a49cdfb90470d7fbbb7))
* 优化心跳 ([7626e20](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/7626e20f6031fbb39623383ef05a6e19db3d81fc))
* add channel permissions openapis ([5b70182](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/5b7018235454d37a53aa994594b0493d58d943ef))
* add direct message openapi ([19e6cf6](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/19e6cf6581f3dddfc798db6f3768ed2775b4a598))
* add example ([b6e076b](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/b6e076b6f177af2d0d65e9c749e663653233a3a1))
* add meApi ([2f37b33](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/2f37b338954d93b37890a16f930ddccba2f86c9b))
* add openapi ([dfebe4a](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/dfebe4a667d49a238e0c1b1d7512a46669be8854))
* add openapis ([991dcd1](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/991dcd11c412b1a31cc608536337c4dbc891f28e))
* add resty-client ([05c213e](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/05c213e038752c915632c01db33eeb9c86f1b7b5))
* add user openapis ([171a5bd](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/171a5bd708964d1336a516c2a2f6a14f247c960f))
* guildMembers接口添加分页参数 ([4bd7a61](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/4bd7a615e8958e7d0ae1b6685d42a1d983d019bf))
* openapi design ([ea9a19a](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/ea9a19a65befbac74ae355aad0a8f6acecb5b298))
* orange-ci 自动化构建 ([ab1611c](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/ab1611c8fad3aa69cb615fb24df304e2b49e055f))
* register openapis ([d7f18d1](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/d7f18d14f3b1e11c859e86c480971895f0e825fd))
* SDK基础架构 ([7cca61c](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/7cca61c2da1a296b11588b8dedb313f7684184a3))
* tune the main process ([ec70a0b](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/ec70a0b370f0337409fdab7f239d849acd9d9b1f))
* websocket基础链接+心跳重连 ([2e330c8](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/2e330c8c95e270c7849ed493b0772ddd16274e81))
* ws监听事件优化,结构调整 ([cb91c8d](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/cb91c8db982f8ee3ca12a48b32401da81885fc98))
* ws优化 ([abf75cc](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/abf75cce3f96e704b2230f248a8b1c623e37461b))
* ws优化 ([0105a85](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/0105a8514ab13db3dc125ec7b7578041ec7d9233))
* wss请求地址优化 ([9fd4bcd](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/9fd4bcd475e0eb28ee9ece7fab9ea5dfc301bc4e))
* wss优化 ([6bb374e](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/6bb374e75c0e81360a2e17c04261336fa6cb808a))


### Bug Fixes

* 修正eslint校验 ([7e6cd0d](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/7e6cd0d3631bc963624bfb4d94b92e5a2f005be5))
* add fix openapis boundary ([0dc47e2](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/0dc47e25c435f7dec72207b737598fa61e19e31e))
* fix apis ([c183a39](https://git.woa.com/qq-channel-bot/bot-node-sdk/commit/c183a39fff8dfef8c8bd0c1bc5fa17cc410f5870))
