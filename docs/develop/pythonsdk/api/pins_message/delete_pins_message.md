# 删除精华消息

用于移除子频道 `channelId` 下的精华消息 `messageId` 。

## 使用示例

```python
import botpy

from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.delete_pin(channel_id=message.channel_id, message_id=message.id)

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

成功返回空对象。

## 返回示例

`data`：

```Python
True
```
