# 表情表态对象

在消息、帖子、评论、回复中使用的表情。

表情表态相关事件可参考[表情表态事件](../../api/gateway/guild_message_reactions.md)。

事件监听方式可参考[ws 使用](../websocket/listen_events.md)。

具体示例可参考[使用示例](#表情表态事件监听)。

## MessageReaction

| 字段名     | 类型                              | 描述                      |
| ---------- | --------------------------------- | ------------------------- |
| user_id    | string                            | [用户 ID](./user.md)      |
| guild_id   | string                            | [频道 ID](./guild.md)     |
| channel_id | string                            | [子频道 ID](./channel.md) |
| target     | [ReactionTarget](#reactiontarget) | 表态对象                  |
| emoji      | [Emoji](./emoji.md)               | 表态所用表情              |

## ReactionTarget

| 字段名 | 类型   | 描述                                                         |
| ------ | ------ | ------------------------------------------------------------ |
| id     | string | 表态对象 ID                                                  |
| type   | number | 表态对象类型，参考 [ReactionTargetType](#reactiontargettype) |


## ReactionUsers

| 字段名     | 类型                              | 描述                      |
| ---------- | --------------------------------- | ------------------------- |
| users      | User 对象列表                      | 用户对象列表，参考 [User](./user.md)，会返回 id, username, avatar 等    |
| cookie     | string                            | 分页参数，用于拉取下一页    |
| is_end     | bool                             | 是否已拉取完成到最后一页，true代表完成 |


## ReactionUsersPager

| 字段名 | 类型   | 描述                                 |
| ------ | ------ | ------------------------------------ |
| cookie | string | 上次请求返回的cookie，第一次请求无需填写 |
| limit  | int    | 每次拉取数量，默认20，最多50，只须第一次请求时设置  |


## ReactionTargetType

| 值  | 描述 |
| --- | ---- |
| 0   | 消息 |
| 1   | 帖子 |
| 2   | 评论 |
| 3   | 回复 |

## 表情表态事件监听

### 代码示例

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
                "2568610",
                "088de19cbeb883e7e97110a2e39c0138d80d48acfc879406",
                1,
                "4",
                cookie=cookie,
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
client = MyClient(intents)
client.run(appid={appid}, token={token})

```

在频道内，长按某条消息进行表情回复 `👍`，ws 收到消息并打印如下 log 信息：

```python
"event MESSAGE_REACTION_ADD, reaction channel id 2568610"
```
