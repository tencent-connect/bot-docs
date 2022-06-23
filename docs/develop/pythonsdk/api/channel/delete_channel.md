# 删除子频道

移除一个子频道。

<PrivateDomain/>

## 使用示例

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.delete_channel(channel_id="xxxx")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

::: warning 注意

- 要求操作人具有`管理频道`的权限，如果是机器人，则需要将机器人设置为管理员。
- 创建成功后，返回创建成功的子频道对象，同时会触发一个频道创建的事件通知。
- 子频道的删除是无法撤回的，一旦删除，将无法恢复。

:::

## 参数说明

| 字段名    | 必填 | 类型   | 描述      |
| --------- | ---- | ------ | --------- |
| channel_id | 是   | string | 子频道 ID |

## 返回说明

成功返回 HTTP 状态码 200

## 返回示例

`data`：

```json
{}
```
