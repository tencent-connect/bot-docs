# 创建频道公告推荐子频道 

用于将指定子频道设置为当前频道的推荐子频道，并以全局公告形式展示。

::: warning 注意

- 只有子频道权限为全体成员可见才可设置为推荐子频道。
- **删除频道公告**推荐子频道请使用 [删除频道公告](./delete_channel_announce.md),并将 `messageId` 设置为 `all`。

:::

## 使用示例

```python
import botpy
from botpy.message import Message
from botpy.types.announce import AnnouncesType

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        channel_list = [{"channel_id": message.channel_id, "introduce": "introduce"}]
        await self.api.create_recommend_announce(message.guild_id, AnnouncesType.MEMBER, channel_list)

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
