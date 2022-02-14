# 获取子频道列表

### 接口

`GET /guilds/{guild_id}/channels`

### 功能描述

用于获取 `guild_id` 指定的频道下的子频道列表。

### Content-Type

`application/json`

### 返回

返回 [Channel](model.md#channel) 对象数组。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```shell
GET /guilds/123456/channels
```

响应数据包

```json
[
  {
    "id": "xxxxxx",
    "guild_id": "123456",
    "name": "很高兴遇见你",
    "type": 4,
    "position": 2,
    "parent_id": "0",
    "owner_id": "0",
    "sub_type": 0
  },

  {
    "id": "xxxxxx",
    "guild_id": "123456",
    "name": "🔒管理员议事厅",
    "type": 0,
    "position": 1,
    "parent_id": "xxxxxx",
    "owner_id": "0",
    "sub_type": 0,
    "private_type": 1
  },
  {
    "id": "xxxxxx",
    "guild_id": "123456",
    "name": "🚪小黑屋",
    "type": 0,
    "position": 2,
    "parent_id": "xxxxxx",
    "owner_id": "0",
    "sub_type": 0,
    "private_type": 0
  },
  {
    "id": "xxxxxx",
    "guild_id": "123456",
    "name": "新的子频道",
    "type": 0,
    "position": 2,
    "parent_id": "123456",
    "owner_id": "0",
    "sub_type": 0,
    "private_type": 2
  }
]
```
