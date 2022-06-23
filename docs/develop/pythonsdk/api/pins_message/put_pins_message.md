# 创建精华消息

用于将`messageId`添加为子频道 `channelId` 内的精华消息。

::: warning 注意

- 精华消息在一个子频道内最多只能创建 `20` 条。
- 只有可见的消息才能被设置为精华消息。
- 接口返回对象中 `message_ids` 为当前请求后子频道内所有精华消息 `message_id` 数组。

:::

## 使用示例

```python
import botpy

from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.put_pin(channel_id=message.channel_id, message_id=message.id)

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| channel_id | 是   | string | 子频道 ID |
| message_id | 是   | string | 消息 ID   |

## 返回说明

返回 [PinsMessage](#pinsmessage) 对象。

### PinsMessage

| 字段名      | 类型     | 描述                               |
| ----------- | -------- | ---------------------------------- |
| guild_id    | string   | 频道 ID       |
| channel_id  | string   | 子频道 ID   |
| message_ids | string 列表 | 消息 ID 列表 |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "message_ids": ["xxxxx"]
}
```
