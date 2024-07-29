# PythonSDK更新日志

## 2023-05-02

* feat: pythonsdk 添加获取频道身份组的成员列表的接口 ([582c2b1](https://github.com/tencent-connect/botpy/pull/135/commits/582c2b185a3264c0b6dcbfb91128f127559dff7d))

## 2022-06-17

* feat: 完善ws事件中Message数据的构建 ([9564cb2](https://github.com/tencent-connect/botpy/pull/103/commits/9564cb2858833fb8de442123226fe7a46f743fe6))
* feat: 完善ws事件中User-Member数据的构建 ([109c74e](https://github.com/tencent-connect/botpy/pull/103/commits/109c74e8845ee0c91b0237a7bf427e9f4587cf47))
* feat: 完善ws事件中Reaction、Audio、DirectMessage 以及 Forum（Thread类）数据的构建 
 ([26af7ad](https://github.com/tencent-connect/botpy/pull/103/commits/26af7adc5fb193707023f3d6ebdc4f6b36936cff))

## 2022-06-15

* feat: 优化gateway, api, flags, http中的部分逻辑构建与冗余代码 ([727ed73](https://github.com/tencent-connect/botpy/commit/727ed73823a3d4e7a9a5f507edb5a3ff0f9a5222))
* docs: 更新文档中的部分demo ([a24bf94](https://github.com/tencent-connect/botpy/commit/a24bf94557a06cf5cfabeefc81de5376a8578346))
* feat: 优化撤回消息api的用法&优化handle消息参数的返回值 ([166496e](https://github.com/tencent-connect/botpy/commit/166496e8b6615b7797b71b004ec394e1876611cb))

## 2022-06-14

* fix: 修复撤回消息隐藏小灰条没有生效的问题 ([6c37dd6](https://github.com/tencent-connect/botpy/commit/06afb5361b05ac05981b1453453c99b1f10faf87))

## 2022-06-13

* feat: 优化指令装饰器并新增指令装饰器demo ([40576451](https://github.com/ReadSmall/botpy/commit/405764517c32bf55b168bd217934d4d452655fb8))
* feat: botpy 1.0 版本合入 ([8a30abe2](https://github.com/ReadSmall/botpy/commit/8a30abe28fc9daed122c60f517c1fbbd3198c8c0))
* feat: 优化http模块&新增频道成员事件的Member构建&优化代码逻辑统一性，去除部分冗余代码 ([0add0b9](https://github.com/tencent-connect/botpy/commit/0add0b9dd761b12e98f66db91c34e0939c270c60))

## 2022-06-11

* fix: 优化logging模块 ([9162c24](https://github.com/tencent-connect/botpy/commit/9162c2452b71778a15dadbc088b76405e53fd68b))

## 2022-01-13

* fix: 修改发送主动消息后的审核状态判断为正常状态 ([9d2dbd3](https://github.com/tencent-connect/botpy/commit/9d2dbd38fc437f466bb4e3ec66892f035f39847b))
* fix: 修改UA头名字 ([933480b](https://github.com/tencent-connect/botpy/commit/933480b43d9e158e17c3901340536570a148961b))

## 2022-01-10

* chore: 修改PYPI打包配置 ([e9a2d57](https://github.com/tencent-connect/botpy/commit/e9a2d57cf9a4206b6d710dd6bfb02831d8837314))

## 2022-01-09

* feat: SDK支持Async ([44473de](https://github.com/tencent-connect/botpy/commit/44473de17e4ca57d48b3249ce7a03e1c2d1b57b0))

## 2022-01-07

* fix: 增加异常时的traceback (#6) ([f9f9962](https://github.com/tencent-connect/botpy/commit/f9f9962aec479223c411566f35c526403d8f6cdc))

## 2022-01-06

* fix: 增加异常信息的traceback打印 (#5) ([cb08164](https://github.com/tencent-connect/botpy/commit/cb08164982b01e4c92cd5ce5dc97572862c6a923))

## 2022-01-05

* doc: 增加版本和流水线徽章 ([caae658](https://github.com/tencent-connect/botpy/commit/caae65816ff94d00c976b432a59aaa3a8ea53713))
* fix: delete websocket error close (#3) ([663111f](https://github.com/tencent-connect/botpy/commit/663111fb5672224208c674315700109eaf7145dc))

## 2021-12-31

* fix: windows下不使用RotatingFileHandler; 优化 README (#2) ([a2e23d0](https://github.com/tencent-connect/botpy/commit/a2e23d0349d4daefbc51b207236c992db7584d63))

## 2021-12-30

* chore: Create python-publish.yml ([4a37777](https://github.com/tencent-connect/botpy/commit/4a377772309300a60c9d5c74e22d7902d0b70baa))
* feat: 增加http请求的ua头 (#1) ([49f31a3](https://github.com/tencent-connect/botpy/commit/49f31a380762aa0f8d3ddcd4df8e733545c74a31))

## 2021-12-27

* fix: 修改test配置的路径 ([9522ded](https://github.com/tencent-connect/botpy/commit/9522dedfc3524ac73860fccfa7ebc055efec34eb))

## 2021-12-25

* fix: 修改import规范 ([37099b3](https://github.com/tencent-connect/botpy/commit/37099b37fb0047bae2136f1944c6f12ae860ba68))
* [init]初始化框架代码 ([4413bd5](https://github.com/tencent-connect/botpy/commit/4413bd5152da1e51fba0551f86d4560c55afecf8))
