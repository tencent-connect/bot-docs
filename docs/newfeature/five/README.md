# QQ机器人能力迭代第五期

## 一、开发者管理端

__机器人开发者管理端-语料、功能配置、指令配置放开部分限制__

### 1. 语料配置规则：
语料支持中文、数字、字母，输入限制6个字以内，输出限制100字以内

### 2. 指令配置规则：
指令文字包含在语料当中，指令文字与语料配置解除绑定校验关系（暂时为底层逻辑放开，开发者管理端暂未放开）

::: warning 注意

已提供下发消息不校验语料id的能力，如需申请可联系机器人管家-tammy

:::


## 二、机器人能力

### 1. 接口能力

#### （1）机器人可查询、赋予、删除用户的子频道可见权限

__查询：__

<img :src="$withBotBase('/images/newfeature/five/channel_permission_1.jpg')" alt="查询子频道权限1">
<img :src="$withBotBase('/images/newfeature/five/channel_permission_2.jpg')" alt="查询子频道权限2">

[获取子频道用户权限｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/channel_permissions/get_channel_permissions.html)

__赋予：__

<img :src="$withBotBase('/images/newfeature/five/add_channel_permission.jpg')" alt="赋予子频道权限">

[修改子频道权限｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/channel_permissions/put_channel_permissions.html)

__删除：__

<img :src="$withBotBase('/images/newfeature/five/remove_channel_permission.jpg')" alt="删除子频道权限">

[修改子频道权限｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/channel_permissions/put_channel_permissions.html)

#### （2）机器人可查询、赋予用户子频道管理员身份

__查询：__

<img :src="$withBotBase('/images/newfeature/five/channel_permission_obj_1.jpg')" alt="子频道权限对象1">
<img :src="$withBotBase('/images/newfeature/five/channel_permission_obj_2.jpg')" alt="子频道权限对象2">

[获取子频道用户权限｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/channel_permissions/get_channel_permissions.html)

__赋予__

<img :src="$withBotBase('/images/newfeature/five/put_guild_member_role.jpg')" alt="创建频道身份组成员">

[创建频道身份组成员｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/guild/put_guild_member_role.html)

#### （3）机器人创建子频道支持区分一级/二级分类

子频道一级类型：文字子频道、语音子频道、直播子频道

子频道二级类型：闲聊、公告、攻略、开黑（开黑暂不对外）

<img :src="$withBotBase('/images/newfeature/five/channel_sub_type.jpg')" alt="子频道类型">

[子频道对象(Channel)｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/channel/model.html)

#### （4）机器人下发消息支持#跳转指定子频道

<img :src="$withBotBase('/images/newfeature/five/message_format.jpg')" alt="消息支持格式">

[内嵌格式｜QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/message/message_format.html)

#### （5）频道身份组对象 defaultroles类型修改

变更前：

<img :src="$withBotBase('/images/newfeature/five/default_roles_before.jpg')" alt="defaultroles变更前">

变更后：

<img :src="$withBotBase('/images/newfeature/five/default_roles_after.jpg')" alt="defaultroles变更后">

[频道身份组对象(Role)](https://bot.q.qq.com/wiki/develop/api/openapi/guild/role_model.html)

::: warning 注意

身份组类型调整已完成，请调用该接口的开发者，尽快完成更改～

:::

### 2. 消息能力

#### （1）机器人被动消息下发无需提前报备上传，可直接下发

::: warning 注意

机器人如有1次下发违规消息被平台打击，该机器人将警用该能力，如需进行被动消息下发需在开发者管理端上传语料进行人工审核，审核时效性24小时内完成。

:::

#### （2）新增大图ark模板样式

大图尺寸规范为 975*540

标题：1行

子标题：2行（如不满2行，则会有一行空白）

<img :src="$withBotBase('/images/newfeature/five/ark_template.jpg')" alt="新增大图ark模板样式">

