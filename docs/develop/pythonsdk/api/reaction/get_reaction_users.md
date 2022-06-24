# 拉取表情表态用户列表

拉取对消息 `message_id` 指定表情表态的用户列表

## 使用示例

```python
from typing import List

import botpy

from botpy.message import Message
from botpy.types import reaction
from botpy.types.user import User

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        users: List[User] = []
        cookie = ""
        while True:
            reactionUsers: reaction.ReactionUsers = await self.api.get_reaction_users(
                channel_id="2568610",
                message_id="088de19cbeb883e7e97110a2e39c0138d80d48acfc879406",
                emoji_type=1,
                emoji_id="4",
                cookie=cookie,
                limit=20
            )

            if not reactionUsers:
                break

            users.extend(reactionUsers["users"])

            if reactionUsers["is_end"]:
                break
            else:
                cookie = reactionUsers["cookie"]

        print(len(users))
        for user in users:
            print(user["username"])

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名      | 必填 | 类型                                  | 描述                             |
| ----------- | ---- | ------------------------------------- | -------------------------------- |
| channel_id  | 是   | string                                | 子频道 ID |
| message_id  | 是   | string                                | 消息 ID                     |
| type        | 是   | int                                   | 表情类型，参考[EmojiType](../../model/emoji.md#EmojiType)      |
| emoji_id    | 是   | string                                | 表情 ID，参考 [Emoji 列表](../../model/emoji.md#Emoji-列表)    |
| cookie    | 否   | string                                | cookie 上次请求返回的cookie，第一次请求无需填写  |
| limit    | 否   | int                                | 返回的最大用户数 (1-100), 默认20  |

## 返回说明

返回 [ReactionUsers 对象](../../model/reaction.md#ReactionUsers)
