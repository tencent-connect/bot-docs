# 发送引用消息

::: warning 注意

- 只支持引用机器人自己发送到的消息以及用户@机器人产生的消息。
- 发送成功之后，会触发一个创建消息的事件。

:::

## 使用示例

使用方式同[发送消息](./post_message.md)，在[MessageSendRequest](../../model/message.md#messagesendrequest)中设置[MessageReference](../../model/message.md#messagereference)即可发送引用消息。

```python
import botpy

from botpy.message import Message
from botpy.types.message import Reference

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        # 构造消息发送请求数据对象
        message_reference = Reference(message_id=message.id)
        # 通过api发送回复消息
        await self.api.post_message(
            channel_id=message.channel_id,
            content="<emoji:4>这是一条引用消息",
            msg_id=message.id,
            message_reference=message_reference,
        )

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 参数      | 必填 | 类型                                | 说明       |
| --------- | ---- | ----------------------------------- | ---------- |
| channel_id | 是   | string                              | 子频道 ID  |
| content | 是   | string                              | 消息内容  |
| msg_id | 是   | string                              | 消息ID  |
| message_reference | 是   | [Reference](#reference)                      | 引用消息体  |

引用消息支持内嵌格式、消息模板及图片，设置相应参数即可。

# Reference

| 参数      | 必填 | 类型                                | 说明       |
| --------- | ---- | ----------------------------------- | ---------- |
| message_id | 是   | string                              | 需要引用回复的消息 ID  |
| ignore_get_message_error | 是   | bool                  | 是否忽略获取引用消息详情错误，默认否  |

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
