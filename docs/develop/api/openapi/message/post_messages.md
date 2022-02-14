# 发送消息

### 接口

`POST /channels/{channel_id}/messages`

### 功能描述

用于向 `channel_id` 指定的子频道发送消息。

- 要求操作人在该子频道具有`发送消息`的权限。
- 主动推送消息，默认每天往每个频道可推送的消息数是 `20` 条，超过会被限制。
- 主动推送消息在每个频道中，每天可以往 `2` 个子频道推送消息。超过后会被限制。
- 不论主动消息还是被动消息，在一个子频道中，每 `1s` 只能发送 `5` 条消息。
- 被动回复消息有效期为 `5` 分钟。超时会报错。
- **发送消息接口要求机器人接口需要连接到 websocket 上保持在线状态**
- 有关主动消息审核，可以通过 [Intents](../../gateway/intents.md) 中审核事件 MESSAGE_AUDIT 返回 [MessageAudited](model.md#messageaudited) 对象获取结果。

### Content-Type

`application/json`

### 参数

| 字段名             | 类型                        | 描述                                                          |
|-------------------|-----------------------------------------------|--------------------------------------------|
| content | string | 选填，消息内容，文本内容，支持[内嵌格式](message_format.md) |
| embed | [MessageEmbed](model.md#messageembed)| 选填，embed 消息，一种特殊的 ark，详情参考[Embed消息](embed_message.md) |
| ark | [MessageArk](model.md#messageark) ark消息对象 | 选填，ark 消息 |
| message_reference | [MessageReference](model.md#messagereference) 引用消息对象 | 选填，引用消息 |
| image | string | 选填，图片url地址，平台会转存该图片，用于下发图片消息 |
| msg_id | string | 选填，要回复的消息id([Message](model.md#message).id), 在 [AT_CREATE_MESSAGE](../../gateway/message.md) 事件中获取。 |

**content, embed, ark, image 至少需要有一个字段，否则无法下发消息。**

#### 主动消息与被动消息

- 主动消息：发送消息时，未填充 `msg_id` 字段的消息。
- 被动消息：发送消息时，填充了 `msg_id` 字段的消息。接口使用此 `msg_id` 拉取用户的消息，同时判断用户消息的发送时间，如果超过被动消息回复时效，将会不允许发送该消息。

### 返回

返回[Message](model.md#message) 对象。

### 错误码

详见[错误码](../error/error.md)。

其中推送、回复消息的 `code` 错误码 `304023`、`304024` 会在 响应数据包 `data` 中返回 [MessageAudit](../error/data/model.md) 审核消息的信息，结构如下:

```json
{
  "code": 304023,
  "message": "push message is waiting for audit now",
  "data": {
    "message_audit": {
      "audit_id": "ab9bd72f-19e8-4394-b09e-66caca0d64e4"
    }
  }
}
```

### 示例

请求数据包

```json
{
  "content": "<@!1234>hello world",
  "msg_id": "xxxxxx"
}
```

响应数据包

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
  "embeds": [{}],
  "pinned": false,
  "type": 0,
  "flags": 0
}
```
