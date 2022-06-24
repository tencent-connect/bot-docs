# 创建子频道公告 

将某条消息创建为子频道的公告。

## 使用示例

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        message_id = "088de19cbeb883e7e97110a2e39c0138d401"
        await self.api.create_announce(message.guild_id, message.channel_id, message_id)

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| guild_id   | 是   | string | 频道 ID     |
| channel_id | 是   | string | 子频道 ID |
| message_id | string | 消息 ID  |


## 返回示例

`data`：

```json
{
    "guild_id":"guild_id",
    "channel_id":"channel_id",
    "message_id":"message_id"
}
```
