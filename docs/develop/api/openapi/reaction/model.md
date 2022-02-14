# 表情表态对象

### MessageReaction

| 字段名        | 类型                               | 描述     |
| ---        | ---                              | ---    |
| user_id    | string                           | 用户ID   |
| guild_id   | string                           | 频道ID   |
| channel_id | string                           | 子频道ID  |
| target     | ReactionTarget                   | 表态对象   |
| emoji      | [Emoji](../emoji/model.md#Emoji) | 表态所用表情 |


### ReactionTarget

| 字段名  | 类型                 | 描述                           |
| ---  | ---                | ---                          |
| id   | string             | 表态对象ID                       |
| type | ReactionTargetType | 表态对象类型，参考 ReactionTargetType |

### ReactionTargetType

| 值   | 描述  |
| --- | --- |
| 0   | 消息  |
| 1   | 帖子  |
| 2   | 评论  |
| 3   | 回复  |

