# 获取当前用户频道列表

### 使用示例
#### sync
```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        guild_list = await self.api.me_guilds(guild_id=message.guild_id, limit=100, desc=True)
        for guild in guild_list:
            botpy.logger.info(f'guild_id: {guild.get("id")} guild_name: {guild.get("name")}')

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```


## 参数说明

| 字段名  | 必填 | 类型                      | 描述             |
| ------- | ---- | ------------------------- | ---------------- |
| guild_id | 是   | string | 获取频道列表范围 |
| limit | 否   | int | 获取频道列表范围 |
| desc | 否   |  bool | 获取列表返回的顺序是否为反序 |

## 返回说明

返回 [Guild](#guild) 数组。

### Guild

| 字段名 | 类型    | 描述               |
| ------ | ------- | ------------------ |
| id     | string  | 频道 ID            |
| name   | string  | 频道名称           |
| icon   | string  | 频道头像地址       |
| owner  | boolean | 当前人是否是创建人 |

## 返回示例

`data`：

```json
[
  {
    "id": 'xxxxxx',
    "name": '测试频道',
    "icon": 'xxxxxx',
    "owner": false,
  },
];
```
