---
sidebar: auto
---

# 文档更新日志

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

* docs(changlog): 同步changlog ([46f5921](https://github.com/tencent-connect/bot-docs/commit/46f59210f4f5f7efd72f47c447eefb93ea9ad288))
* perf(ci): 更新changlog脚本 ([ef0d549](https://github.com/tencent-connect/bot-docs/commit/ef0d549b89fc822abdf1eac5521dc8d6201ab17d))

## 2022-01-12

* feat: 添加表情相关文档 ([b4eac75](https://github.com/tencent-connect/bot-docs/commit/b4eac75ea59b000bbfbe5e51bc683706514100d8))
* feat: 补充子频道私密类型参数 ([aec5c56](https://github.com/tencent-connect/bot-docs/commit/aec5c561c88dfee47e465a64ab0d696a4ff2667b))
* feat: 补充获取频道列表的参数 ([79c67fb](https://github.com/tencent-connect/bot-docs/commit/79c67fba4f1d8f11c5995212ee98ef7f2ce39e82))

## 2022-01-11

* feat: 添加日程API ([9d88b23](https://github.com/tencent-connect/bot-docs/commit/9d88b2395288dc8f41ae6862e589c14eef5fea91))
* feat: 更新messageAPI文档 ([2e23754](https://github.com/tencent-connect/bot-docs/commit/2e23754bb38e548036c7ec9bd519e7fabd5db476))

## 2022-01-10

* feat: 调整changelog脚本，支持pythonsdk变更记录的同步 ([02750b5](https://github.com/tencent-connect/bot-docs/commit/02750b5e6b4de6701efdf7adf6bca683f66df73d))
* perf(nodesdk): 优化文档内容和结构 ([ad20cb7](https://github.com/tencent-connect/bot-docs/commit/ad20cb7cc22ab8f6c54e835382315c850e045b22))
* docs: 同步文档changelog ([c47acd3](https://github.com/tencent-connect/bot-docs/commit/c47acd3c59c848ab7cdd695848672b164c25528a))
* feat(docs): 增加changelog、优化nodesdk安装指引: ([707d7d0](https://github.com/tencent-connect/bot-docs/commit/707d7d05ee6ea19db9cc08005778f7892fce2d57))

## 2022-01-08

* docs: 删除不必要的修改 ([12ddbcc](https://github.com/tencent-connect/bot-docs/commit/12ddbcce435606fc8d68b8ed298d56fc1eff8c21))
* docs: 更新examples的链接 ([c421bce](https://github.com/tencent-connect/bot-docs/commit/c421bce4fd751182975d6338f0e0f1b6a3cee3ee))
* perf(sync-script): 优化同步脚本细节 ([855bae4](https://github.com/tencent-connect/bot-docs/commit/855bae4f8bcc8d863c7c2a6ccf0e0c5394468ca9))
* ci(changelog): 增加生成changlog的脚本 ([652e67a](https://github.com/tencent-connect/bot-docs/commit/652e67aaa0991da10824c231e1f3ca774c1356e6))
* feat: 添加公告API ([2906d10](https://github.com/tencent-connect/bot-docs/commit/2906d10215185c7aa8fe1346642179b759380d56))
* feat: 添加撤回消息API ([17ed691](https://github.com/tencent-connect/bot-docs/commit/17ed6918ba7a78cb673dc7ec19b9dd659a0d91d5))
* feat: 添加禁言API ([cb2ea97](https://github.com/tencent-connect/bot-docs/commit/cb2ea973cf9ec48988ccf47cb698a63214fe7583))

## 2022-01-06

* docs: 更新文档 ([b032bbe](https://github.com/tencent-connect/bot-docs/commit/b032bbec8f6c274173f804338c51f92ee1bde915))
* 介绍-个人认证修改 ([adada41](https://github.com/tencent-connect/bot-docs/commit/adada41a5bd8ea3b7548b90220e2970aba589e18))
* 介绍-接入流程-个人主体认证修改标点 ([62b7ff0](https://github.com/tencent-connect/bot-docs/commit/62b7ff0dc527476537da502bd6c1fbb9eda2b3ec))

## 2022-01-05

* feat(nodesdk): nodesdk改名，同步更新文档 ([34de70b](https://github.com/tencent-connect/bot-docs/commit/34de70b6dbda6ff881725b58682f04a9efd69863))

## 2022-01-02

* docs: 更新消息推送限制描述 ([6cbc6b2](https://github.com/tencent-connect/bot-docs/commit/6cbc6b23b5d6fe6713e231d3c08c67390eab2fd5))

## 2022-01-01

* feat: 添加接口接入版本号标志 ([065ea92](https://github.com/tencent-connect/bot-docs/commit/065ea92e7ad35a470d98041a448cf937317a2a55))
* feat: 添加子频道身份组权限API ([a128d8e](https://github.com/tencent-connect/bot-docs/commit/a128d8efc550817faa9ea0b67f5d24b11a5fcb46))

## 2021-12-31

* docs: 修改特殊接口申请文案描述 ([a8ac215](https://github.com/tencent-connect/bot-docs/commit/a8ac2150b8d41d8e30ac514f298f729b85721e80))

## 2021-12-30

* fix: 统一描述 ([a758db9](https://github.com/tencent-connect/bot-docs/commit/a758db94ee7ddeff7ba87f12990919bff3ca2002))
* docs: 更新'身份组成员'操作相关参数描述 ([bf34b56](https://github.com/tencent-connect/bot-docs/commit/bf34b56a2e629c32db045d69f06076dcf3c91536))

## 2021-12-29

* docs: 调整'子频道权限'相关描述 ([ef50ee4](https://github.com/tencent-connect/bot-docs/commit/ef50ee405c0d4db43eea051e1cdc814940636ce2))
* feat: 增加贡献者展示 ([7b84ec5](https://github.com/tencent-connect/bot-docs/commit/7b84ec57d5e9c4883ac12c521dcfc5bdcf5d3b76))

## 2021-12-28

* fix: 修复API页面'禁用Edit on Github 失效'的bug ([124f442](https://github.com/tencent-connect/bot-docs/commit/124f44291c0a92a4f67ed128308e0475b2c55fce))
* chore: pr被merge时触发消息提醒 ([82191b4](https://github.com/tencent-connect/bot-docs/commit/82191b405a39a6f7b60d407293e6ba87956f2c3b))
* [doc]增加多个监听事件的示例 ([581e893](https://github.com/tencent-connect/bot-docs/commit/581e893b0514e5bd021b871789214a2950909ade))

## 2021-12-27

* docs: 添加更新日志链接 ([463d8da](https://github.com/tencent-connect/bot-docs/commit/463d8dab4a8a8e2d7f844f468952c88cdb039b37))
* chore: add commit lint ([adef0b6](https://github.com/tencent-connect/bot-docs/commit/adef0b623aea443c906db88e3f1bfa8342e53ac3))
* perf: sync脚本抽离 ([fefe941](https://github.com/tencent-connect/bot-docs/commit/fefe941dec0a293170ad7b9a65c48b8de4acae50))
* ci: 增加构建标志 ([620ee24](https://github.com/tencent-connect/bot-docs/commit/620ee242ed00edc3b0e41bbd8c7e90495d0909cf))
* feat: 支持配置不需要展示EditOnGithub的页面 ([2765673](https://github.com/tencent-connect/bot-docs/commit/2765673e2aaf96a17527ce4cb214ac603ae6bc77))

## 2021-12-26

* style: 解决md文件格式问题 ([0ffa175](https://github.com/tencent-connect/bot-docs/commit/0ffa175b90a3022ae284ca92efaeeb0f9fd12331))
* feat: 增加内网api文档同步工具 ([0191ffb](https://github.com/tencent-connect/bot-docs/commit/0191ffb2148a8b6dd2e6ce82259cd312d38add24))
* feat: 移除api目录，改为内网同步 ([b4494d4](https://github.com/tencent-connect/bot-docs/commit/b4494d486964b82e94c846103e6a827fd5c204f2))
* chore: add lint-md ([68220b3](https://github.com/tencent-connect/bot-docs/commit/68220b3251950891088649efc7ecdfaf395882f0))
* update issue action ([da3c5c1](https://github.com/tencent-connect/bot-docs/commit/da3c5c177d677418e71dcd5e337c68c1d3c994c7))

## 2021-12-25

* Update README.md ([ec49252](https://github.com/tencent-connect/bot-docs/commit/ec492528348b828f62181b4c60d02612804e809a))
* Update issues.yml ([4a6ab1c](https://github.com/tencent-connect/bot-docs/commit/4a6ab1c25e2aab63c05bd548a6fc83b19d73e127))
* update issue action ([58ab27b](https://github.com/tencent-connect/bot-docs/commit/58ab27b46ee10b3e0be37637fb31da0e3fb52ec6))
* fix: 修复安装指引 ([be50052](https://github.com/tencent-connect/bot-docs/commit/be50052d22c6d3eb6627fe93da250e8370404287))
* doc: 更新nodesdk介绍页 ([98a8d94](https://github.com/tencent-connect/bot-docs/commit/98a8d94b01a7edb1e5b0edcec40d19cdc18ad19c))
* update notifier ([2f1b254](https://github.com/tencent-connect/bot-docs/commit/2f1b254e148ce0de6cb8d1ffb7e2cf56e762e569))
* fix: 文档修缮 ([a97b59b](https://github.com/tencent-connect/bot-docs/commit/a97b59ba0b0c5058938eadb56b83bf7dea45c041))

## 2021-12-24

* [fix]修改参数 ([c923591](https://github.com/tencent-connect/bot-docs/commit/c923591fe5ea7717e0e96cc28cbb38308fbcad91))
* sync from inner api ([9e45210](https://github.com/tencent-connect/bot-docs/commit/9e45210d1e29ec61de642fcf548d18d13fab2ea2))
* fix: local dev error ([c801b80](https://github.com/tencent-connect/bot-docs/commit/c801b80facd3f9dc45a46389c7b76d08953c3362))
* fix: process环境问题 ([3ab4212](https://github.com/tencent-connect/bot-docs/commit/3ab421218cc34313ddc03d5b146ba7af418a83e3))
* style: pwd button position ([613c804](https://github.com/tencent-connect/bot-docs/commit/613c8040b203631858212e7cb19e39613906c773))
* fix: npm script ([b428f9b](https://github.com/tencent-connect/bot-docs/commit/b428f9ba58e68f0844bffdd67cf00d641e03f7a5))

## 2021-12-23

* [fix]增加事件的详细说明 ([b04b74b](https://github.com/tencent-connect/bot-docs/commit/b04b74b89a138e26aaea0c2c69f8be4de24676c4))
* [fix]修复文档的不规范问题 ([6e9ca66](https://github.com/tencent-connect/bot-docs/commit/6e9ca66f17df35c5314fe28f6f36ee1552425870))
* [fix]修复文档的不规范问题 ([7204a24](https://github.com/tencent-connect/bot-docs/commit/7204a248fda618da0401b30398d53265f1db0b9f))
* [fix]修复目录不显示的问题 ([1b96249](https://github.com/tencent-connect/bot-docs/commit/1b962499967dc82a3061e57e38c0abb0390af2aa))
* doc : 填加pythonesdk菜单 ([1c3fa00](https://github.com/tencent-connect/bot-docs/commit/1c3fa00b14dc08963bdbc7a635c0353f3fb642d4))
* [feat]修改文档树形菜单的排列 ([92a6c33](https://github.com/tencent-connect/bot-docs/commit/92a6c33073a134e717d17083d60139bcb474fbe6))
* [feat]修改文档树形菜单的排列 ([4679750](https://github.com/tencent-connect/bot-docs/commit/4679750cfdc1f2eafe93805bcc6001400c51b361))
* [feat]增加python-sdk的完整的接口文档代码 ([427fbe1](https://github.com/tencent-connect/bot-docs/commit/427fbe12427c67d2b4eb1dda513a306621efbf2a))
* [feat]增加python-sdk的完整的接口文档代码 ([b0ff937](https://github.com/tencent-connect/bot-docs/commit/b0ff9373a80d7ccdbc7851766bc99743429f7bf3))
* feat: cdn区分test构建环境 ([424d288](https://github.com/tencent-connect/bot-docs/commit/424d288c4afa7f7168d38e6b1c2ec2178e21d9ac))
* fix: 文档修缮 ([488d044](https://github.com/tencent-connect/bot-docs/commit/488d04488641d824bb61a231b246fbe887183931))
* feat: 静态资源走cdn ([f457fe2](https://github.com/tencent-connect/bot-docs/commit/f457fe29497958c6525de489ec650f969488b7e3))
* fix: nodesdk文档修缮 ([8598b93](https://github.com/tencent-connect/bot-docs/commit/8598b932851e383b1c49ff03696c5614932c4c73))
* fix :  子频道权限修改参数校正 ([78e85e2](https://github.com/tencent-connect/bot-docs/commit/78e85e2f448eb0d7b4d22979db791be302cd7e9c))
* perf(pwa): 更新pwa提示文案样式 ([30d8f18](https://github.com/tencent-connect/bot-docs/commit/30d8f1891dd7959e9f5dc9614cf1848a6972e817))
* fix : 修复频道身份组文档描述 ([9c7fadc](https://github.com/tencent-connect/bot-docs/commit/9c7fadc7088c6f6dd48772df6cc3a0c9f6299b44))
* feat(pwa): 添加pwa功能，用于页面更新推送 ([6003678](https://github.com/tencent-connect/bot-docs/commit/6003678027961cd7b31da1b12b51b552d3d7f4d9))

## 2021-12-22

* [feat]增加python-sdk的基础框架文档，需要继续完善，勿使用 ([43b1422](https://github.com/tencent-connect/bot-docs/commit/43b1422a2a4ad0d9c31bdb61e7de048e48a73806))
* chore(pwa): 更新pwa插件 ([0bc926d](https://github.com/tencent-connect/bot-docs/commit/0bc926d89f155407f18712cbd9a4253ef17238b4))
* doc: 更新文档描述 ([371c88e](https://github.com/tencent-connect/bot-docs/commit/371c88e9a51cbeeb6eb24195bb8bd6ff201d4143))
* fix(nodesdk): sdk中channel字段描述修复 ([c34fdfc](https://github.com/tencent-connect/bot-docs/commit/c34fdfcebdbe97d3bcec96bc073a9ee137905689))
* fix: 文档主页个人主体账号类型错误 ([23e3816](https://github.com/tencent-connect/bot-docs/commit/23e38167a814be794ad875de7e10bef56598c0aa))
* sync from inner api docs ([6a7d3a9](https://github.com/tencent-connect/bot-docs/commit/6a7d3a9b1d78f657013d0a898338e0b66e96300f))

## 2021-12-21

* doc: 完善sdk文档 ([cda440c](https://github.com/tencent-connect/bot-docs/commit/cda440c40788fde388b3495a83a13be37ecb541f))
* fix: 增加链接 ([3a88542](https://github.com/tencent-connect/bot-docs/commit/3a88542531c1edc17b272a06d764ca37d9169369))
* ci: fix pr title ([e8a9f2d](https://github.com/tencent-connect/bot-docs/commit/e8a9f2daafdb46ab4f0fbf8cf000b618362a279c))
* ci: 补充针对pr、issues的通知 ([0cd3dbc](https://github.com/tencent-connect/bot-docs/commit/0cd3dbcb3a16403af1709def30178f0dec44b7c5))
* fix(nodesdk): 完善私域机器人添加描述 ([5ea1f23](https://github.com/tencent-connect/bot-docs/commit/5ea1f234489d14f750cb28d6a620f3f8994a44e6))
* doc(api): 更新小程序相关api功能介绍 ([ec7236c](https://github.com/tencent-connect/bot-docs/commit/ec7236c3b75f6bc31c04b526c8c94298a73a5b5c))
* doc: 完善sdk文档 ([f4e8042](https://github.com/tencent-connect/bot-docs/commit/f4e8042c8bd822bf3c95d80ebcd924432ac8bc44))
* sync from inner ([76106a9](https://github.com/tencent-connect/bot-docs/commit/76106a9ceab45034432807f99e5da9f4e8440c6e))
* sync from bbteam_projects/group_pro/docs ([a379fef](https://github.com/tencent-connect/bot-docs/commit/a379fefa6581da59c822e8b84196f31bfc5df067))
* fix: 修改npm包链接 ([23a6935](https://github.com/tencent-connect/bot-docs/commit/23a693523808aede087358cb123b242b7f7c511e))
* doc(nodesdk): 更新nodesdk文档描述 ([c41d11d](https://github.com/tencent-connect/bot-docs/commit/c41d11d61682ee97181273547d30b6070d1bee24))

## 2021-12-20

* perf(pwa): 添加pwa插件 ([09dacb3](https://github.com/tencent-connect/bot-docs/commit/09dacb38f69c0d4301408d8b42be1515de3f35ef))
* perf(pwa): 添加pwa插件 ([23c77e7](https://github.com/tencent-connect/bot-docs/commit/23c77e708f93f87e47f1fdfc038fec915d5b7fac))
* feat(github): 添加在github上编辑连接 ([19997b9](https://github.com/tencent-connect/bot-docs/commit/19997b961c00f6b3d590695746d63cf8a8b47831))
* doc(nodesdk): 完善nodesdk使用文档 ([af7f9a4](https://github.com/tencent-connect/bot-docs/commit/af7f9a4c87937db80eb6f7532dd2fa1a5baddc4d))
* chore(lint): 调整markdown提交lint规则 ([2743bc2](https://github.com/tencent-connect/bot-docs/commit/2743bc248d8af659c465622d2348105e8c54cfc2))
* doc: 完善文档描述 ([0a06a93](https://github.com/tencent-connect/bot-docs/commit/0a06a93550771de2624f1b0bcdf0246cad7c8b44))
* ci: set private to true ([5e1d87f](https://github.com/tencent-connect/bot-docs/commit/5e1d87fa7a46b44c22e8c020e5598fde87a5953a))
* docs: 补充共建说明 ([76c1bc2](https://github.com/tencent-connect/bot-docs/commit/76c1bc2ee52803d0116edae77fe363e159608e7f))
* docs: add MIT License ([73372a0](https://github.com/tencent-connect/bot-docs/commit/73372a023e8fa4590040a5fcb70f4d8cbe98284f))
* docs: readme补充目录结构说明 ([18261ce](https://github.com/tencent-connect/bot-docs/commit/18261cea8b314a072365bcd59ab2167c6895e17a))
* perf: 去除changelog ([212a3aa](https://github.com/tencent-connect/bot-docs/commit/212a3aae00fdee51fce6ab5c630fe6e43e82e586))

## 2021-12-19

* init: 文档项目开源初始化 ([f5835b6](https://github.com/tencent-connect/bot-docs/commit/f5835b66de8c35bbe0291da2be68cdfbb1204967))