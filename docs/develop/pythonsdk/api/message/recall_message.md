# 撤回消息

撤回子频道内的消息。

::: warning 注意

- 管理员可以撤回普通成员的消息。
- 频道主可以撤回所有人的消息。

:::

## 使用示例

```python
import botpy

from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.recall_message(channel_id=message.channel_id, message_id="xxx", hidetip=True)

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 参数      | 必填 | 类型   | 说明                             |
| --------- | ---- | ------ | -------------------------------- |
| channel_id | 是   | string | 子频道 ID |
| message_id | 是   | string | 消息 ID  |
| hide_tip | 否   | bool | 是否隐藏提示小灰条，true 为隐藏，false 为显示。默认为false  |

## 返回说明

返回是否更新成功

## 返回示例

`data`：

```python
True
```
