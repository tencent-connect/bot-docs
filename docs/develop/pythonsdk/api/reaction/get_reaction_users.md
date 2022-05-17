# 拉取表情表态用户列表

拉取对消息 `message_id` 指定表情表态的用户列表

## 使用示例

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})


def demo():
    api = qqbot.ReactionAPI(token, False)
    reaction_users = api.get_reaction_users(channel_id, message_id, EmojiType.system, "4", ReactionUsersPager())
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})


async def demo():
    api = qqbot.AsyncReactionAPI(token, False)
    reaction_users = await api.get_reaction_users(channel_id, message_id, EmojiType.system, "4", ReactionUsersPager())
```

## 参数说明

| 字段名      | 必填 | 类型                                  | 描述                             |
| ----------- | ---- | ------------------------------------- | -------------------------------- |
| channel_id  | 是   | string                                | 子频道 ID |
| message_id  | 是   | string                                | 消息 ID                     |
| type        | 是   | int                                   | 表情类型，参考[EmojiType](../../model/emoji.md#EmojiType)      |
| emoji_id    | 是   | string                                | 表情 ID，参考 [Emoji 列表](../../model/emoji.md#Emoji-列表)    |
| pager       | 是   | ReactionUsersPager 对象  | 拉取表情表态用户列表的分页对象，参考[ReactionUsersPager](../../model/reaction.md#ReactionUsersPager)|

## 返回说明

返回 [ReactionUsers 对象](../../model/reaction.md#ReactionUsers)
