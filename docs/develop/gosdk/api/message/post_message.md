# 发送消息

向指定子频道推送消息。

::: warning 注意

- 要求操作人在该子频道具有`发送消息`的权限。
- 主动推送消息，默认每天往每个频道可推送的消息数是 `20` 条，超过会被限制。
- 主动推送消息在每个频道中，每天可以往 `2` 个子频道推送消息，超过后会被限制。
- 不论主动消息还是被动消息，在一个子频道中，每 `1s` 只能发送 `5` 条消息。
- 被动回复消息有效期为 `5` 分钟，超时会报错。
- **发送消息接口要求机器人接口需要链接到 `websocket gateway`上保持在线状态。**
- 有关主动消息审核，可以通过 `Intents` 中审核事件 `MESSAGE_AUDIT` 返回 `MessageAudited` 对象获取结果。

:::

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

message, err := api.PostMessage(ctx, channelId, &dto.MessageToCreate{
  MsgID:   msgId, //如果未空则表示主动消息
  Content: "hello world",
})
if err != nil {
  log.Fatalln("调用 PostMessage 接口失败, err = ", err)
}
```

## 参数说明

| 参数      | 必填 | 类型                                | 说明       |
| --------- | ---- | ----------------------------------- | ---------- |
| channelId | 是   | string                              | 子频道 ID  |
| MessageToCreate  | 是   | [MessageToCreate](#MessageToCreate) | 消息体结构 |

## MessageToCreate

| 字段名  | 类型                          | 描述                                                                                     |
| ------- | ----------------------------- | ---------------------------------------------------------------------------------------- |
| Content | string                        | 消息内容，文本内容，支持[内嵌格式](message_format.md)                                    |
| Embed   | [Embed](#Embed) | embed 消息，一种特殊的 ark                                                               |
| Ark     | [Ark](#Ark)     | ark 消息                                                                                 |
| Image   | string                        | 图片 url 地址                                                                            |
| MsgID  | string                        | 要回复的消息 id。**带了 msg_id 视为[被动回复消息](#被动回复消息)，否则视为主动推送消息** |
| MessageReference | [MessageReference](#MessageReference) | 引用消息对象                                                 |

`content`、`embed`、`ark`、`image`**至少需要有一个字段**，否则无法下发消息。

### 被动回复消息

::: warning 注意

被动消息需是用户`@机器人`的消息，否则将会报错。

:::

## Embed

详见[消息内嵌格式](message_format.md)。

## Ark

详见[发送模板消息](post_ark_message.md)。

## MessageReference

详情见[发送引用消息](message_reference.md)

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
| ID         | string            | 消息 ID                                                                         |
| ChannelID | string            | 子频道 ID                                                                       |
| GuildID   | string            | 频道 ID                                                                         |
| Content    | string            | 消息内容                                                                        |
| Timestamp  | [Timestamp](#Timestamp) | 消息创建时间，是个 `iISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |
| Author     | [User](#user)     | 消息创建者                                                                      |
| Member     | [Member](#member) | 消息创建者的 member 信息                                                        |

### User

| 字段名             | 类型    | 描述                                                                                               |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------- |
| ID                 | string  | 用户 ID                                                                                           |
| Username           | string  | 用户名                                                                                             |
| Avatar             | string  | 用户头像地址                                                                                       |
| Bot                | bool    | 是否是机器人                                                                            ｜
| UnionOpenID        | string  | 特殊关联应用的 openid，需要特殊申请并配置后才会返回。如需申请，请联系平台运营人员。                |
| UnionUserAccount   | string  | 机器人关联的互联应用的用户信息，与 union_openid 关联的应用是同一个。如需申请，请联系平台运营人员。 |

### Member

| 字段名    | 类型          | 描述                                                                                         |
| --------- | ------------- | -------------------------------------------------------------------------------------------- |
| GuildID   | string        | 频道ID                                                                              ｜
| User      | [User](#user) | 用户基础信息，来自 QQ 资料，只有成员相关接口中会填充此信息                                   |
| Nick      | string        | 用户在频道内的昵称                                                                           |
| Roles     | string[]      | 用户在频道内的身份组 ID，默认值可参考[DefaultRoleIDs](../guild/role_model.md#DefaultRoleIDs) |
| JoinedAt | [Timestamp](#Timestamp) | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00"         |

### DefaultRoleIDs

系统默认生成下列身份组 ID。

| 身份组 ID 默认值 | 描述         |
| ---------------- | ------------ |
| 1                | 全体成员     |
| 2                | 管理员       |
| 4                | 群主/创建者  |
| 5                | 子频道管理员 |

### Timestamp

| 字段名             | 类型    | 描述           |
| ------------------ | ------- | -------------|
| Timestamp          | string  | 时间         ｜


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
