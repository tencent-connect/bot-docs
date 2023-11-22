# 表情表态

<!-- > 目前表情表态仅支持在频道内使用 -->
::: tip 说明
目前表情表态仅支持在频道内使用
:::


## 机器人发表表情表态

### 接口

```http
PUT /channels/{channel_id}/messages/{message_id}/reactions/{type}/{id}
```

### 功能描述

对消息 `message_id` 进行表情表态

### 参数

| 字段名     | 类型   | 描述                                                      |
| ---------- | ------ | --------------------------------------------------------- |
| channel_id | string | 子频道ID                                                  |
| message_id | string | 消息ID                                                    |
| type       | int    | 表情类型，参考 [EmojiType](../../../openapi/emoji/model.md#EmojiType)   |
| id         | string | 表情ID，参考 [Emoji 列表](../../../openapi/emoji/model.md#Emoji%20列表) |


### 返回

成功返回 HTTP 状态码 `204`。

### 错误码

详见[错误码](../../../openapi/error/error.md)。

### 示例

请求数据包

```http
PUT /channels/1013531/messages/08c095b7ba8ed4abd7e00110cbd83f3841489aa2bd9006/reactions/1/203
```

## 删除机器人发表的表情表态

### 接口

```http
DELETE /channels/{channel_id}/messages/{message_id}/reactions/{type}/{id}
```

### 功能描述

删除自己对消息 `message_id` 的表情表态

### 参数

| 字段名     | 类型   | 描述                                                      |
| ---------- | ------ | --------------------------------------------------------- |
| channel_id | string | 子频道ID                                                  |
| message_id | string | 消息ID                                                    |
| type       | int    | 表情类型，参考 [EmojiType](../../../openapi/emoji/model.md#EmojiType)   |
| id         | string | 表情ID，参考 [Emoji 列表](../../../openapi/emoji/model.md#Emoji%20列表) |


### 返回

成功返回 HTTP 状态码 `204`。

### 错误码

详见[错误码](../../../openapi/error/error.md)。

### 示例

请求数据包

```http
DELETE /channels/1013531/messages/08c095b7ba8ed4abd7e00110cbd83f3841489aa2bd9006/reactions/1/203
```

## 获取消息表情表态的用户列表

### 接口

```http
GET /channels/{channel_id}/messages/{message_id}/reactions/{type}/{id}?cookie={cookie}&limit={limit}
```

### 功能描述
拉取对消息 `message_id` 指定表情表态的用户列表

### Path 参数
|字段名	|类型	|描述|
| ------- | ------ | ----- |
|channel_id	|string	|子频道ID|
|message_id	|string	|消息ID|
|type	|int|	表情类型，参考 EmojiType|
|id	|string	|表情ID，参考 Emoji 列表|

### Query 参数
|字段名|	类型|	描述|
| ---- | ---- | ---- |
|cookie	|string	|上次请求返回的cookie，第一次请求无需填写|
|limit	|int|	每次拉取数量，默认20，最多50，只在第一次请求时设置|

### 返回
|字段名	|类型	|描述|
| ---- | ---- | ---- |
|users	|array	|用户对象，参考 User，会返回 id, username, avatar|
|cookie	|string	|分页参数，用于拉取下一页|
|is_end	|bool	|是否已拉取完成到最后一页，true代表完成|

### 错误码
详见[错误码](../../../openapi/error/error.md)。

### 示例
请求数据包
```http
GET /channels/1013531/messages/08c095b7ba8ed4abd7e00110cbd83f3841489aa2bd9006/reactions/1/203?cookie=&limit=20
```

返回数据包
```json
{
    "users": [
        {
            "id": "1158788878435714165",
            "username": "频道机器人",
            "avatar": "http://thirdqq.qlogo.cn/g?b=oidb&k=T2qBkyqicopYXA5mn0lBkqA&s=0&t=1635736336"
        }
    ],
    "cookie":"1_2",
    "is_end": false
}
```

## 事件

### 用户发表

- **基本概况**

用户对消息进行表情表态时，触发事件通知。

#### MESSAGE_REACTION_ADD (intents GUILD_MESSAGE_REACTIONS)

##### 发送时机

- 用户对消息进行表情表态时

#### MESSAGE_REACTION_REMOVE (intents GUILD_MESSAGE_REACTIONS)

##### 发送时机

- 用户对消息进行取消表情表态时

##### 内容

内容为 [MessageReaction](../../../openapi/reaction/model.md#MessageReaction) 对象

##### 示例

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

