# 删除日程 

删除`日程子频道`里的一个日程。

::: warning 注意

要求操作人具有管理频道的权限，如果是机器人，则需要将机器人设置为管理员。

:::

## 使用示例

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.get_schedules(channel_id="日程ID")
        await self.api.delete_schedule(channel_id="日程子频道ID", schedule_id="日程ID")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名     | 必填 | 类型   | 描述                             |
| ---------- | ---- | ------ | -------------------------------- |
| channel_id  | 是   | string | [子频道 ID](../../model/channel.md) |
| schedule_id | 是   | string | 日程 ID                          |

## 返回说明

返回结果为空。

## 返回示例

`data`：

```python
True
```
