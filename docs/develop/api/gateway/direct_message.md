# 私信消息事件

## DIRECT_MESSAGE_CREATE (intents DIRECT_MESSAGE)

### 发送时机
- 用户通过私信发消息给机器人时

## 内容
内容为 [Message](../openapi/message/model.md#message) 对象

## 示例
```json
{
    "author": {
        "avatar": "http://thirdqq.qlogo.cn/0",
        "bot": false,
        "id": "1234",
        "username": "abc"
    },
    "channel_id": "100010",
    "content": "ndnnd",
    "guild_id": "18700000000001",
    "id": "0812345677890abcdef",
    "member": {
        "joined_at": "2021-04-12T16:34:42+08:00",
        "roles": [
            "1"
        ]
    },
    "timestamp": "2021-05-20T15:14:58+08:00"
}
```

