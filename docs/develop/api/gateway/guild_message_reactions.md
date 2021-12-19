# 表情表态事件

## MESSAGE_REACTION_ADD (intents GUILD_MESSAGE_REACTIONS)

### 发送时机

- 用户对消息进行表情表态时

## MESSAGE_REACTION_REMOVE (intents GUILD_MESSAGE_REACTIONS)

### 发送时机

- 用户对消息进行取消表情表态时

## 内容

内容为 [MessageReaction](../openapi/reaction/model.md#MessageReaction) 对象

## 示例

```json
{
  "user_id": "1111222233333",
  "emoji": {
    "id": "277",
    "type": 1
  },
  "channel_id": "12345",
  "guild_id": "11110011112222",
  "target": {
    "id": "2",
    "type": 0
  }
}
```

