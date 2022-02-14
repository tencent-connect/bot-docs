# 获取消息列表

### 接口

`GET /channels/{channel_id}/messages`

### 功能描述

用于获取子频道 `channel_id` 下的消息列表。

### Content-Type

application/json

### 参数

| 字段名 | 类型   | 描述               | 要求                                    |
| ------ | ------ | ------------------ | --------------------------------------- |
| around | string | 读此 id 前后的消息 | 消息 id, `around/before/after` 只能带一个 |
| before | string | 读此 id 之前的消息 | 消息 id, `around/before/after` 只能带一个 |
| after  | string | 读此 id 之后的消息 | 消息 id, `around/before/after` 只能带一个 |
| limit  | int    | 每次拉取多少条消息 | 最大不超过 20                           |

如果 `around/before/after` 均为空，则拉取最新的 limit 条消息。

### 返回

返回[Message](model.md#message) 对象数组。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```http
GET /channels/123456/messages?limit=2
```

响应数据包

```json
[
  {
    "id": "xxxxxx",
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
  },
  {
    "id": "xxxxxx",
    "channel_id": "123456",
    "guild_id": "xxxxxx",
    "content": "world",
    "timestamp": "2021-05-25T15:20:32+08:00",
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
]
```
