# 获取指定消息

### 接口
`GET /channels/{channel_id}/messages/{message_id}`

### 返回
[Message](model.md#message) 对象

### 示例
REQ BODY
```http
GET /channels/100001/messages/abcdef01
```

RESP BODY
```json
{
    "id": "abcdef01",
    "channel_id": "100001",
    "guild_id": "100000000001",
    "content": "hello",
    "timestamp": "2021-05-25T15:20:34+08:00",
    "author": {
        "id": "1000000001",
        "username": "az",
        "bot": false
    },
    "member": {
        "roles": [
            "1"
        ],
        "joined_at": "2021-04-12T16:34:42+08:00"
    }
}
```