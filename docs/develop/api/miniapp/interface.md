# 获取频道和当前人信息

适用场景： 1.机器人服务打开小程序后（机器人服务需在机器人开发者端-服务配置）

2.机器人发出的 ark 打开小程序后（ark 模版的跳转 link 可以带上对应的参数）

## 从 extendData 中获取频道 ID

### 机器人服务打开小程序

开发者在开发者平台配置服务功能的时候，在 `extendData` 支持使用占位符来获取`频道ID`，`子频道ID`。

如：`guildID=$OPENGUILDID$&channelID=$CHANNELID$`

平台会在频道中打开机器人面板的时候，对占位符进行替换。开发者可以在 `onLaunch` 的时候从 `options.extendData` 中获取数据。

示例如下：

```js
{
  "path": "pages/index/index",
  "query": {},
  "scene": 5003,
  "extendData": "bid=101900000&guildID=1070000000000000000",
  "referrerInfo": {}
}
```

::: warning 注意

需要注意 `extendData`的值是字符串类型

:::

### 机器人发出的 ark 打开小程序

由于机器人发送消息到频道的时候，是知道 `$OPENGUILDID$` 和 `$CHANNELID$` 的，所以可以在发送消息的时候将对应参数的值直接带到小程序地址上用于打开的时候调用小程序接口

## 获取频道信息与当前人身份

`qq.getGuildInfo(Object object)`

### 调用参数 Object object

| 属性          | 类型     | 默认值 | 必填 | 说明                                                           | 最低版本 |
| ------------- | -------- | ------ | ---- | -------------------------------------------------------------- | -------- |
| open_guild_id | string   |        | 是   | 频道在机器人场景的 [Guild](../openapi/guild/model.md#guild) id | 1.40.0   |
| channel_id    | string   |        | 否   | 子频道 Id                                                      | 1.40.0   |
| success       | function |        | 否   | 接口调用成功的回调函数                                         | 1.40.0   |
| fail          | function |        | 否   | 接口调用失败的回调函数                                         | 1.40.0   |
| complete      | function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）               | 1.40.0   |

open_guild_id 从小程序的 extendData 上获取，即开发者在机器人平台配置小程序服务时候提示到的 `$OPENGUILDID$`

### Object.success 回调函数参数 Object res

#### 解密前

res 得到的是加密之后的数据，需要开发者解密，解密方案参考: https://q.qq.com/wiki/develop/game/frame/open-ability/signature.html

| 属性          | 类型   | 说明                         |
| ------------- | ------ | ---------------------------- |
| encryptedData | string | 加密之后的数据，需要解密     |
| iv            | string | 对称解密算法初始向量(base64) |
| signature     | string | 签名(base64)                 |

### encryptedData 解密后的数据

| 属性          | 类型   | 说明                                                            |
| ------------- | ------ | --------------------------------------------------------------- |
| guild_name    | string | 频道名称                                                        |
| member_role   | number | 当前成员角色 0 成员/1 管理员/2 频道主                           |
| channel_info  | Object | 子频道信息，只在请求上有 channel_id 的时候才会返回              |
| member_userid | string | 当前用户在机器人场景的 [User](../openapi/user/model.md#user) id |
| member_nick   | string | 当前用户在频道内的昵称                                          |
| open_guild_id | string | [Guild](../openapi/guild/model.md#guild) id                     |

### Object channel_info 子频道信息

| 属性          | 类型   | 说明                                       |
| ------------- | ------ | ------------------------------------------ |
| channel_name  | string | 子频道名称                                 |
| channel_type  | number | 子频道类型                                 |
| is_accessible | number | 是否可以访问该子频道，0 不可访问、1 可访问 |
