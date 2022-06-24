# 删除频道身份组

删除频道身份组。

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.delete_guild_role(guild_id="xxxx", role_id="xxxx")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

### 参数说明

| 参数    | 必填 | 类型   | 说明      |
| ------- | ---- | ------ | --------- |
| guild_id | 是   | string | 频道 ID   |
| role_id  | 是   | string | 身份组 ID |

### 返回说明

是否删除成功

### 返回示例

`data`：

```python
True
```
