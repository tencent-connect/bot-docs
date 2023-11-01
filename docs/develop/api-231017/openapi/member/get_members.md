# 获取频道成员列表

### 接口

`GET /guilds/{guild_id}/members`

### 功能描述

用于获取 `guild_id` 指定的频道中所有成员的详情列表，支持分页。

<PrivateDomain/>

### Content-Type

`application/json`

### 参数

| 字段名 | 类型   | 描述                                                       |
| ------ | ------ | ---------------------------------------------------------- |
| after  | string | 上一次回包中最后一个`member`的`user id`， 如果是第一次请求填 0，默认为 0 |
| limit  | uint32 | 分页大小，1-400，默认是 1。成员较多的频道尽量使用较大的`limit`值，以减少请求数 |

### 返回

返回 [Member](model.md#member) 对象数组。

### 有关返回结果的说明

1. 在每次翻页的过程中，可能会返回上一次请求已经返回过的`member`信息，需要调用方自己根据`user id`来进行去重。

2. 每次返回的`member`数量与`limit`不一定完全相等。翻页请使用最后一个`member`的`user id`作为下一次请求的after参数，直到回包为空，拉取结束。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求

```shell
GET /guilds/123456/members?limit=2
```

响应数据包

```json
[
  {
    "user": {
      "id": "xxxxxx",
      "username": "xxxx",
      "avatar": "xxxxxx",
      "bot": false,
      "public_flags": 0,
      "system": false,
      "union_openid": "xxxxxx",
      "union_user_account": ""
    },
    "nick": "",
    "roles": ["1"],
    "joined_at": "2021-12-09T15:53:41+08:00",
    "deaf": false,
    "mute": false,
    "pending": false
  },
  {
    "user": {
      "id": "xxxxxx",
      "username": "秦时明月",
      "avatar": "xxxxxx",
      "bot": false,
      "public_flags": 0,
      "system": false,
      "union_openid": "xxxxxx",
      "union_user_account": ""
    },
    "nick": "",
    "roles": ["4"],
    "joined_at": "2021-12-02T15:19:00+08:00",
    "deaf": false,
    "mute": false,
    "pending": false
  }
]
```
