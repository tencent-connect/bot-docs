# 创建子频道公告

### 接口

`POST /channels/{channel_id}/announces`

### 功能描述

- 机器人设置消息为指定子频道公告

### Content-Type

`application/json`

### 参数

| 字段名      | 类型    | 描述                                                                                                                                                      |
| -----------| ------ | ------- |
| message_id | string | 消息 id  |

### 返回

[Announces](model.md#Announces) 公告对象

### 具体错误

[错误码](../error/error.md)

### 示例

REQ BODY

```json
{
  "message_id": "08cf85f3efcacfe21f1094ad611a1231343431313532313836373133393436313220801e280030a2ddfa86043803400348cef7a08d06"
}
```

RESP BODY

```json
{
    "guild_id": "1232455552",
    "channel_id": "10001",
    "message_id":"08cf85f3efcacfe21f1094ad611a1231343431313532313836373133393436313220801e280030a2ddfa86043803400348cef7a08d06"
}
```
