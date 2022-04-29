# v.1(2021.12.15)

## 一、机器人客户端

### 1. 机器人指令/服务交互方式升级

@机器人，支持机器人的指令/服务展示在同一面板，便于用户了解并使用机器人相关能力

<img :src="$withBotBase('/images/newfeature/six/serve_directive_same_panel.jpg')" alt="查询子频道权限1">

## 二、开发者管理端

### 1. 新增用户意见反馈能力

在顶部导航栏，增加开发者社区tab，开发者可以在管理端创建腾讯兔小巢空间，填写产品ID后即可在机器人C端自动创建用户反馈入口，用户对于机器人的反馈将自动同步至开发者管理端，实现快速获取机器人意见反馈。

<img :src="$withBotBase('/images/newfeature/six/feedback_1.jpg')" alt="意见反馈1">
<img :src="$withBotBase('/images/newfeature/six/feedback_2.jpg')" alt="意见反馈2">
<img :src="$withBotBase('/images/newfeature/six/feedback_3.jpg')" alt="意见反馈3">

具体创建方法详见文档：

[用户反馈空间创建攻略](https://docs.qq.com/doc/DY0FBR0FUSm5lT0pn)

::: warning 注意

平台同步新增了用户投诉入口，用户可向平台投诉机器人不佳体验，请广大开发者遵守平台规则保证用户体验

:::

### 2. 优化沙箱频道填写体验

由填写改为下拉，解决开发者频道id获取问题，下拉频道展示校验逻辑如下：

(1)开发者平台管理员QQ为频道主或者管理员

(2)该频道成员数小于等于20人

(3)展示频道ID、频道名称、频道头像

## 三、机器人能力

### 1. 新增三个接口能力

#### (1) 机器人获取用户信息头像改为获取用户频道头像

<img :src="$withBotBase('/images/newfeature/six/avatar.jpg')" alt="用户频道头像">

[用户对象(User)｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/user/model.html)

#### (2) 机器人可创建/删除子频道公告

##### 创建

<img :src="$withBotBase('/images/newfeature/six/create_sub_channel_announce.jpg')" alt="创建子频道公告">

[创建子频道公告｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/announces/post_channel_announces.html)

##### 删除

<img :src="$withBotBase('/images/newfeature/six/delete_sub_channel_announce.jpg')" alt="删除子频道公告">

[删除子频道公告｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/announces/delete_channel_announces.html)

#### (3) 机器人可获取/创建/修改/删除日程活动

##### 获取频道日程列表

<img :src="$withBotBase('/images/newfeature/six/get_schedules.jpg')" alt="获取频道日程列表">

[获取频道日程列表｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/schedule/get_schedules.html)

##### 获取单个日程信息

<img :src="$withBotBase('/images/newfeature/six/get_schedule.jpg')" alt="获取单个日程信息">

[获取单个日程信息｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/schedule/get_schedule.html)

##### 创建日程

<img :src="$withBotBase('/images/newfeature/six/post_schedule.jpg')" alt="创建日程">

[创建日程｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/schedule/post_schedule.html)

##### 修改日程

<img :src="$withBotBase('/images/newfeature/six/patch_schedule.jpg')" alt="修改日程">

[修改日程｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/schedule/patch_schedule.html)

##### 删除日程

<img :src="$withBotBase('/images/newfeature/six/delete_schedule.jpg')" alt="删除日程">

[删除日程｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/schedule/delete_schedule.html)

### 2. 新增一个监听事件

#### （1）添加/删除表情表态反应事件

##### 添加

<img :src="$withBotBase('/images/newfeature/six/message-reaction-add-intents-guild-message-reactions.jpg')" alt="添加表情表态事件">

[添加表情表态事件｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/gateway/guild_message_reactions.html#message-reaction-add-intents-guild-message-reactions)

##### 删除

<img :src="$withBotBase('/images/newfeature/six/message-reaction-remove-intents-guild-message-reactions.jpg')" alt="删除表情表态事件">

[删除表情表态事件｜QQ机器人文档](hhttps://bot.q.qq.com/wiki/develop/api/gateway/guild_message_reactions.html#message-reaction-remove-intents-guild-message-reactions)

## 四、消息能力

### 1. 默认不校验语料id，无需单独申请

开发者入驻后，企业/个人主体均默认被动消息不校验语料id，如出现消息违规（广告、营销、色情、赌博等）问题则取消该能力，全部语料需上传至人工审核（审核时效性24小时），同时主动消息需人审后可发布（审核时效性30分钟）。

### 2. 主动消息提频

公域机器人每个频道/天可下发**主动消息上限从2条调整为20条**


## 五、机器人SDK

### 1. Node SDK发布

已支持Node SDK

[SDK接入指南QQ机器人文档](https://bot.q.qq.com/wiki/develop/nodesdk/#%E5%BD%93%E5%89%8D%E7%89%88%E6%9C%AC)

### 2. 提供主/被动消息SDK demo示例

平台提供示例便于开发者快速了解消息应用场景

[demo示例](https://github.com/tencent-connect/botgo-demos)

## 六、额外能力支持

::: tip 提示

**一个QQ号可申请两个频道**

:::

已申请机器人正式和测试频道的QQ号均支持创建两个频道，开发者自主填写到机器人开发者管理端的QQ号默认为测试频道，其他则为正式频道；
后续开发者仍需先填写申请频道创建权限问卷（一个QQ号即可），由官方对机器人开发者定制创建两个频道号权限。

[频道创建权限问卷](https://docs.qq.com/form/page/DZVF3RFJnTGF0Y3Nk?confirmed=1#/fill)
