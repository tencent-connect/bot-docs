# 发送消息

向指定子频道推送消息。

::: warning 注意

- 要求操作人在该子频道具有`发送消息`的权限。
- 发送成功之后，会触发一个创建消息的事件。
- 被动回复消息有效期为 `5` 分钟。
- 主动推送消息每日每个子频道限 `2` 条。
- **发送消息接口要求机器人接口需要链接到 `websocket gateway` 上保持在线状态**

:::

## 使用示例

```javascript
async function demo() {
  let { data } = await client.messageApi.postMessage(channelID, message);
}
```

## 参数说明

| 参数      | 必填 | 类型                                | 说明       |
| --------- | ---- | ----------------------------------- | ---------- |
| channelID | 是   | string                              | 子频道 ID  |
| messsage  | 是   | [MessageToCreate](#messagetocreate) | 消息体结构 |

## MessageToCreate

| 字段名  | 类型                          | 描述                                                                                     |
| ------- | ----------------------------- | ---------------------------------------------------------------------------------------- |
| content | string                        | 消息内容，文本内容，支持[内嵌格式](message_format.md)                                    |
| embed   | [MessageEmbed](#messageembed) | embed 消息，一种特殊的 ark                                                               |
| ark     | [MessageArk](#messageark)     | ark 消息                                                                                 |
| image   | string                        | 图片 url 地址                                                                            |
| msg_id  | string                        | 要回复的消息 id。**带了 msg_id 视为[被动回复消息](#被动回复消息)，否则视为主动推送消息** |

`content`、`embed`、`ark`、`image`**至少需要有一个字段**，否则无法下发消息。

### 被动回复消息

::: warning 注意

被动消息需是用户`@机器人`的消息，否则将会报错。

:::

## MessageEmbed

详见[消息内嵌格式](./message_format.md)。

## MessageArk

详见[发送模板消息](./post_ark_messages.md)。

## 返回说明

主动消息都需要审核，返回结果如下：

```json
{
  "code": 304023,
  "message": "push message is waiting for audit now"
}
```

若为私域机器人可正常返回[Message](#message) 对象。

### Message

| 字段名     | 类型              | 描述                                                                            |
| ---------- | ----------------- | ------------------------------------------------------------------------------- |
| id         | string            | 消息 ID                                                                         |
| channel_id | string            | 子频道 ID                                                                       |
| guild_id   | string            | 频道 ID                                                                         |
| content    | string            | 消息内容                                                                        |
| timestamp  | string            | 消息创建时间，是个 `iISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |
| author     | [User](#user)     | 消息创建者                                                                      |
| member     | [Member](#member) | 消息创建者的 member 信息                                                        |

### User

| 字段名   | 类型    | 描述         |
| -------- | ------- | ------------ |
| id       | string  | 用户 ID      |
| username | string  | 用户名       |
| bot      | boolean | 是否是机器人 |

### Member

| 字段名    | 类型     | 描述                                                                                 |
| --------- | -------- | ------------------------------------------------------------------------------------ |
| roles     | string[] | 用户在频道内的身份组 ID，默认值可参考[DefaultRoleIDs](#defaultroleids)               |
| joined_at | string   | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |

### DefaultRoleIDs

系统默认生成下列身份组 ID。

| 身份组 ID 默认值 | 描述         |
| ---------------- | ------------ |
| 1                | 全体成员     |
| 2                | 管理员       |
| 4                | 群主/创建者  |
| 5                | 子频道管理员 |

## 返回示例

以发送文本内容`hello world`为例，下面是返回示例：

`data`:

```json
{
  "id": "101234567890abcdef",
  "channel_id": "10001",
  "guild_id": "6400000001",
  "content": "hello world",
  "timestamp": "2021-05-13T14:45:45+08:00",
  "tts": false,
  "mention_everyone": false,
  "author": {
    "id": "12345",
    "username": "abc",
    "avatar": "",
    "bot": true
  },
  "embeds": [{}],
  "pinned": false,
  "type": 0,
  "flags": 0
}
```
