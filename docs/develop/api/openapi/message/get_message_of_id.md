# 获取指定消息

### 接口

`GET /channels/{channel_id}/messages/{message_id}`

### 功能描述

用于获取子频道 `channel_id` 下的消息 `message_id` 的详情。

### Content-Type

application/json

### 返回

返回[Message](model.md#message) 对象。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```http
GET /channels/123456/messages/112233
```

响应数据包

```json
{
  "id": "112233",
  "channel_id": "123456",
  "guild_id": "xxxxxx",
  "content": "hello",
  "timestamp": "2021-05-25T15:20:34+08:00",
  "author": {
    "id": "xxxxxx",
    "username": "az",
    "bot": false
  },
  "member": {
    "roles": ["1"],
    "joined_at": "2021-04-12T16:34:42+08:00"
  }
}
```
