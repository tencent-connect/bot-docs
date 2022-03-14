# 消息内嵌格式

::: warning 注意

- 消息不支持 markdown 格式，会自动移除 markdown 格式
- 内嵌格式仅在 content 中会生效，在 Ark 和 Embed 中不生效

:::

## 使用示例

```python
import qqbot

token = qqbot.Token({appid}, {token})

msg_api = qqbot.MessageAPI(token, False)         
msg_api.post_message(channel_id, message_send_request)
```

## 参数说明

| 参数      | 必填 | 类型                                | 说明       |
| --------- | ---- | ----------------------------------- | ---------- |
| channelID | 是   | string                              | 子频道 ID  |
| message_send_request  | 是   | [MessageSendRequest](#MessageSendRequest) | 消息体结构 |

## MessageSendRequest

| 字段名  | 类型                          | 描述                                                                    |
| ------- | ----------------------------- | ----------------------------------------------------------------------- |
| content | string                        | 消息内容，参考[支持的格式](#支持的格式)                                 |
| embed   | [MessageEmbed](#messageembed) | embed 消息，一种特殊的 ark                                              |
| ark     | [MessageArk](#messageark)     | ark 消息                                                                |
| image   | string                        | 图片 url 地址                                                           |
| msg_id  | string                        | 要回复的消息 id。**带了 msg_id 视为被动回复消息，否则视为主动推送消息** |

## MessageEmbed

| 字段名      | 类型                                      | 描述                                                                           |
| ----------- | ----------------------------------------- | ------------------------------------------------------------------------------ |
| title       | string                                    | 标题                                                                           |
| description | string                                    | 描述                                                                           |
| prompt      | string                                    | 消息弹窗内容                                                                   |
| timestamp   | string                                    | 消息创建时间                                                                   |
| fields      | [MessageEmbedField[]](#messageembedfield) | 消息创建时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |

## MessageEmbedField

| 字段名 | 类型   | 描述   |
| ------ | ------ | ------ |
| name   | string | 字段名 |
| value  | string | 字段值 |

### 支持的格式

| 类型    | 结构          | 描述                                                                | 示例             |
| :------ | :------------ | :------------------------------------------------------------------ | :--------------- |
| @用户   | `<@user_id>`    | 解析为 `@用户` 标签                                                   | `<@1234000000001>`
| @所有人 | `@everyone`     | 解析为 `@所有人` 标签，需要机器人拥有发送 `@所有人` 消息的权限    | `@everyone` |
| #子频道 | `<#channel_id>` | 解析为 `#子频道` 标签，点击可以跳转至子频道，仅支持当前频道内的子频道 | `<#12345>`         |
| 表情    | `<emoji:id>`    | 解析为系统表情，具体表情 id 参考 [Emoji 列表](../model/emoji.md#Emoji-列表)，仅支持 type=1 的系统表情，type=2 的 emoji 表情直接按字符串填写即可 | `<emoji:4>` 解析为得意表情 |

## 返回说明

返回[Message](#message) 对象。

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
