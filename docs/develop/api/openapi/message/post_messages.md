# 发送消息

### 接口
`POST /channels/{channel_id}/messages`

### 功能描述
- 要求操作人在该子频道具有`发送消息`的权限。
- 发送成功之后，会触发一个创建消息的事件。
- 被动回复消息有效期为 5 分钟
- 主动推送消息每日每个子频道限 2 条
- **发送消息接口要求机器人接口需要链接到websocket gateway 上保持在线状态**

### Content-Type
`application/json`

### 参数

| 字段名  | 类型                                  | 描述                                                                                                                                                      |
| ------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| content | string                                | 消息内容，文本内容，支持[内嵌格式](message_format.md)                                                                                                     |
| embed   | [MessageEmbed](model.md#messageembed) | embed 消息，一种特殊的 ark，详情参考[Embed消息](embed_message.md)                                                                                                                                |
| ark     | [MessageArk](#messageark) ark消息对象 | ark 消息                                                                                                                                                  |
| image   | string                                | 图片url地址                                                                                                                                               |
| msg_id  | string                                | 要回复的消息id([Message](model.md#message).id), 在 [AT_CREATE_MESSAGE](../../gateway/message.md) 事件中获取。**带了 msg_id 视为被动回复消息，否则视为主动推送消息** |

content, embed, ark, image 至少需要有一个字段，否则无法下发消息。

### 返回
[Message](model.md#message) 对象

### 具体错误

[错误码](../error/error.md)

### 示例

REQ BODY
```json
{
    "content": "<@!1234>hello world",
    "msg_id": "abcdefg"
}
```

RESP BODY
```json
{
    "id": "101234567890abcdef",
    "channel_id": "10001",
    "guild_id": "6400000001",
    "content": "<@!1234>hello world",
    "timestamp": "2021-05-13T14:45:45+08:00",
    "tts": false,
    "mention_everyone": false,
    "author": {
        "id": "12345",
        "username": "abc",
        "avatar": "",
        "bot": true
    },
    "embeds": [
        {}
    ],
    "pinned": false,
    "type": 0,
    "flags": 0
}
```
