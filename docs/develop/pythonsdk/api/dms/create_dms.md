# 创建私信会话

用于机器人和在同一个频道内的成员创建私信会话。

:::warning 注意

机器人和用户存在共同频道才能创建私信会话。

:::

## 使用示例

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.create_dms(guild_id="xxxx", user_id="xxxx")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名 | 必填 | 类型                        | 描述           |
| ------ | ---- | --------------------------- | -------------- |
| guild_id | 是   | string | [源频道 ID](../../model/guild.md) |
| user_id    | 是   | string | [接收者 ID](../../model/user.md)  |

## 返回说明

返回[DMS](#dms)对象。

### DMS

| 字段名      | 类型   | 描述                    |
| ----------- | ------ | ----------------------- |
| guild_id    | string | 私信会话关联的频道 ID   |
| channel_id  | string | 私信会话关联的子频道 ID |
| create_time | string | 创建私信会话时间戳      |

## 返回示例

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "create_time": "1642545606"
}
```
