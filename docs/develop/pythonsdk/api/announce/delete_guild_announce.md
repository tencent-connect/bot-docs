# 删除频道推荐子频道 

删除频道推荐子频道。

## 使用示例

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.delete_announce(message.guild_id, "all")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                           |
| --------- | ---- | ------ | ------------------------------ |
| guild_id   | 是   | string | 频道 ID  |
| message_id | 是   | string | 消息 ID |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```python
True
```
