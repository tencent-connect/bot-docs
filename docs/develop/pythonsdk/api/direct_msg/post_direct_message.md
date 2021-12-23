# 发送私信消息

## 功能描述

- 发送私信消息
- 私信的 guild_id 在[创建私信会话](create_direct_message.md)时以及[私信消息事件](../../websocket/listen_events.md)中获取

## 使用示例

```py
import qqbot

token = qqbot.Token({appid}, {token})

api = qqbot.MessageAPI(token, False)
message = api.post_direct_message(guild_id, send_msg)
```

## 参数说明

| 字段名 | 类型                                                   | 描述   |
| ------ | ------------------------------------------------------ | ------ |
| guild_id    |   string  | 创建的私信会话频道[guild_id](create_direct_message.md#返回说明)  |
| send_msg    | [MessageSendRequest](../message/post_message#MessageSendRequest) | 消息体 |

## 返回说明

返回[Message](../message/post_message.md#message) 对象

## 返回示例

同[发送消息返回示例](../message/post_message.md#返回示例)
