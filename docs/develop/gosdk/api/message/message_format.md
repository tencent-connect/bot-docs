# 消息内嵌格式

::: warning 注意

- 消息不支持 markdown 格式，会自动移除 markdown 格式
- 内嵌格式仅在 content 中会生效，在 Ark 和 Embed 中不生效

:::

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

message, err := api.PostMessage(ctx, channelId, &dto.MessageToCreate{
  MsgID:   msgId, //如果未空则表示主动消息
  Content: "<@!1234>hello world",
})
if err != nil {
  log.Fatalln("调用 PostMessage 接口失败, err = ", err)
}
```

## 参数说明

| 参数      | 必填 | 类型                                | 说明       |
| --------- | ---- | ----------------------------------- | ---------- |
| channelID | 是   | string                              | 子频道 ID  |
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

## Embed

| 字段名      | 类型                                      | 描述                                                                           |
| ----------- | ----------------------------------------- | ------------------------------------------------------------------------------ |
| Title       | string                                    | 标题                                                                           |
| Description | string                                    | 描述                                                                           |
| Prompt      | string                                    | 消息弹窗内容                                                                   |
| Thumbnail   | [MessageEmbedThumbnail](#MessageEmbedThumbnail)  | 消息的缩略图象                                                           |
| Fields      | [EmbedField[]](#EmbedField) | Embed字段描述 |

## EmbedField

| 字段名 | 类型   | 描述   |
| ------ | ------ | ------ |
| Name   | string | 字段名 |
| Value  | string | 字段值 |

## MessageEmbedThumbnail

| 字段名             | 类型    | 描述           |
| ------------------ | ------- | -------------|
| URL          | string  |    缩略图url      ｜

### 支持的格式

| 类型    | 结构          | 描述                                                                | 示例             |
| :------ | :------------ | :------------------------------------------------------------------ | :--------------- |
| @用户   | <@user_id>    | 解析为 @用户 标签                                                   | <@1234000000001> |
| @所有人	| @everyone	| 解析为 @所有人 标签，需要机器人拥有发送 @所有人 消息的权限 |	@everyone|
| #子频道 | <#channel_id> | 解析为 #子频道 标签，点击可以跳转至子频道，仅支持当前频道内的子频道 | <#12345>         |
| 表情	| <emoji:id>	| 解析为系统表情，具体表情 id 参考 Emoji 列表，仅支持 type=1 的系统表情，type=2 的 emoji 表情直接按字符串填写即可 |	<emoji:4> 解析为得意表情|

## 返回说明

返回[Message](#message) 对象。

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

以发送文本内容`<@!1234>hello world`为例，下面是返回示例：

`data`:

```json
{
  "id": "xxxxxx",
  "channel_id": "xxxxxx",
  "guild_id": "xxxxxx",
  "content": "<@!1234>hello world",
  "timestamp": "2021-05-13T14:45:45+08:00",
  "tts": false,
  "mention_everyone": false,
  "author": {
    "id": "xxxxxx",
    "username": "abc",
    "avatar": "",
    "bot": true
  },
  "embeds": [
    {}
  ],
  "pinned": false,
  "type": 0,
  "flags": 0
}
```
