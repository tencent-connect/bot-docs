# v.2(2022.01.20)
## 一、机器人客户端

### 1. 优化机器人C端提示，区分开发中、审核中、已上线（手q8868版本，年前全量发布）

<img :src="$withBotBase('/images/newfeature/seven/robot_client_remind.jpg')" alt="优化机器人C端提示">

### 2. 支持公域机器人被添加、分享到其他频道，私域机器人不允许被添加、分享到其他频道

（手q8868版本，年前全量发布）

<img :src="$withBotBase('/images/newfeature/seven/public_robot_other_channel.jpg')" alt="公域机器人分享其他频道">

### 3. 文字子频道输入框，支持输入/，唤起机器人指令/服务半屏面板（手q8868版本，年前全量发布）

<img :src="$withBotBase('/images/newfeature/seven/child_channel_robot_directive.jpg')" alt="子频道输入框支持机器人指令">

附上： [QQ机器人C端场景说明文档](https://docs.qq.com/doc/DTW1ScEpOWkxudGdN)

## 二、开发者管理端

### 1. 增加频道管理tab，实现自主选择机器人灰度频道

#### 企业开发者

可添加企业开发者QQ为管理员or频道主的频道，可添加频道上限为10个。

#### 个体开发者

选择公域机器人，则可添加个体开发者为管理员or频道主的频道，可添加频道上限为10个。

选择私域机器人，则可添加个体开发者为频道主的频道，可添加频道上限为10个。

::: warning 注意

灰度功能仅机器人上线后可用

:::

### 2. 增加机器人公域/私域选择，及公域机器人自主控制被添加频道数量

机器人上线前，可修改公域/私域机器人类型。

机器人上线后，选择公域机器人后不允许修改，选择私域机器人可修改为公域机器人。

开发者选择私域机器人后，自动开通私域能力，当从私域机器人变为公域机器人后，所有私域能力将被收回。

::: warning 注意

__由于选择公域后，会被其他频道主添加，如回退为私域，将会影响存量频道机器人功能使用，考虑到用户体验，故不允许选择公域后再修改为私域。__

:::

### 3. 优化指令配置，增加 "/ "，指令名支持中英文

#### 指令名

管理端默认增加一个"/"，开发者保存后，格式为“/指令名”，然后展示在客户端

开发者可自主编辑，限制6字符（汉字算1个字符，英文算1个字符），可以输入中文和英文

#### 指令描述

开发者可自主编辑，限制15个字符，仅可输入中文

#### 权限菜单

每一条指令都需要下拉选择「管理员」or「所有人」

::: warning 注意

已经提审过的指令需要删除后重新添加才可带上“/”，且代码里指令实现也需带上“/”

:::

## 三、机器人能力

### 1. 接口能力

#### （1）支持设置/解除 全局禁言

<img :src="$withBotBase('/images/newfeature/seven/mute_all.jpg')" alt="全局禁言">

[禁言全员｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/guild/patch_guild_mute.html)

#### （2）支持设置/解除 指定成员禁言

<img :src="$withBotBase('/images/newfeature/seven/mute_special.jpg')" alt="指定成员禁言">

[禁言指定成员｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/guild/patch_guild_member_mute.html)

#### （3）支持单个子频道的发言权限/可查看权限 ——查询/绑定/解绑身份组；支持查询/赋予/删除 指定成员/全部成员的发言权限

<img :src="$withBotBase('/images/newfeature/seven/child_channel_permission.jpg')" alt="子频道权限">

[子频道权限对象｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/channel_permissions/model.html)

#### （4）支持添加 /删除 全局公告

<img :src="$withBotBase('/images/newfeature/seven/public_announce.jpg')" alt="全局公告">

[创建频道公告｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/announces/post_guild_announces.html)

## 四、额外能力支持

机器人开发者默认可开通2个频道，无需单独进行申请~
