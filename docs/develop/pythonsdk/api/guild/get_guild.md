# 获取频道详情

获取频道详情信息。

## 使用示例

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.get_guild(guild_id="xxxx")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guild_id | 是   | string | 频道 ID |

## 返回说明

返回 [Guild](#guild) 对象。

### Guild

| 字段名       | 类型    | 描述               |
| ------------ | ------- | ------------------ |
| id           | string  | 频道 ID            |
| name         | string  | 频道名称           |
| owner_id     | string  | 创建人用户 ID      |
| owner        | boolean | 当前人是否是创建人 |
| member_count | number  | 成员数             |
| max_members  | number  | 最大成员数         |
| description  | string  | 描述               |

## 返回示例

`data`：

```json
{
    "id":"guildId",
    "name":"频道名称",
    "owner_id":"owner_id",
    "owner":false,
    "member_count":8,
    "max_members":300,
    "description":""
}
```
