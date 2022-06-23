# 删除表情表态

删除自己对消息 `message_id` 的表情表态。

## 使用示例

```python
import botpy

from botpy.message import Message
class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.delete_reaction(channel_id="xxxx", message_id="xxxx", emoji_type=1, emoji_id="4")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名      | 必填 | 类型                                  | 描述                             |
| ----------- | ---- | ------------------------------------- | -------------------------------- |
| channel_id  | 是   | string                                | 子频道 ID |
| message_id  | 是   | string                                | 消息 ID                     |
| emoji_type  | 是   | int                                   | 表情类型，参考[EmojiType](../../model/emoji.md#EmojiType)                     |
| emoji_id    | 是   | string                                | 表情 ID，参考 [Emoji 列表](../../model/emoji.md#Emoji-列表)                     |

## 返回说明

返回是否更新成功

## 返回示例

`data`：

```Python
True
```
