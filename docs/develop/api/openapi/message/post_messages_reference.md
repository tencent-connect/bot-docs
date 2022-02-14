# 发送引用消息

### 接口

`POST /channels/{channel_id}/messages`

### 功能描述

- 只支持引用机器人自己发送到的消息以及用户@机器人产生的消息。
- 发送成功之后，会触发一个创建消息的事件。

### Content-Type

`application/json`

### 参数

不能单独发送引用消息，引用消息需要和其他消息类型组合发送，参数请见[发送消息](post_messages.md)。

### 返回

[Message](model.md#message) 对象

### 具体错误

[错误码](../error/error.md)

### 示例

请求数据包

``` json
{
    "content":"引用",
    "message_reference": {
        "message_id": "08f1908d979791ee521099fb9e011a1231343431313532313836373133393436313220801e28003086fdb0ba0638910540910548a8ccaa8f06"
    }
}
    
```

响应数据包

```json

{
    "id": "101234567890abcdef",
    "channel_id": "10001",
    "guild_id": "6400000001",
    "content": "",
    "timestamp": "2021-05-13T14:45:45+08:00",
    "tts": false,
    "mention_everyone": false,
    "author": {
        "id": "12345",
        "username": "abc",
        "avatar": "",
        "bot": true
    },
    "pinned": false,
    "type": 0,
    "flags": 0
}

```
