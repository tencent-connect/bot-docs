# 发送引用消息

::: warning 注意

- 只支持引用机器人自己发送到的消息以及用户@机器人产生的消息。
- 发送成功之后，会触发一个创建消息的事件。

:::

## 使用示例

使用方式同[发送消息](./post_message.md)，在[MessageSendRequest](../../model/message.md#messagesendrequest)中设置[MessageReference](../../model/message.md#messagereference)即可发送引用消息。

```python
import qqbot

token = qqbot.Token({appid}, {token})

msg_api = qqbot.MessageAPI(token, False)  

message_reference = MessageReference()
message_reference.message_id = message_id  
send = qqbot.MessageSendRequest(
    content="<emoji:4>这是一条引用消息",
    msg_id=message_id,
    message_reference=message_reference
)

# 通过api发送回复消息
await msg_api.post_message(channel_id, send)
```

## 参数说明

| 参数      | 必填 | 类型                                | 说明       |
| --------- | ---- | ----------------------------------- | ---------- |
| channelID | 是   | string                              | 子频道 ID  |
| messsage  | 是   | [MessageSendRequest](../../model/message.md#messagesendrequest) | 消息体结构 |

引用消息支持内嵌格式、消息模板及图片，设置相应参数即可。

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
| author     | [User](../../model/user.md)     | 消息创建者                                                                      |
| member     | [Member](../../model/member.md) | 消息创建者的 member 信息                                                        |

### DefaultRoleIDs

系统默认生成下列身份组 ID。

| 身份组 ID 默认值 | 描述         |
| ---------------- | ------------ |
| 1                | 全体成员     |
| 2                | 管理员       |
| 4                | 群主/创建者  |
| 5                | 子频道管理员 |

## 返回示例

`data`:

```json
{
  "id": "xxxxxx",
  "channel_id": "xxxxxx",
  "guild_id": "xxxxxx",
  "content": "",
  "timestamp": "2021-05-13T14:45:45+08:00",
  "tts": false,
  "mention_everyone": false,
  "author": {
    "id": "xxxxxx",
    "username": "xxxxxx",
    "avatar": "",
    "bot": true
  },
  "pinned": false,
  "type": 0,
  "flags": 0
}
```
