# 发送私信消息

用于发送私信消息，前提是已经创建了私信会话。

## 功能描述

- 私信的 guild_id 在[创建私信会话](create_direct_message.md)时以及[私信消息事件](../../websocket/listen_events.md)中获取
- 私信场景下，每个机器人每天可以对一个用户发 2 条主动消息。
- 私信场景下，每个机器人每天累计可以发 200 条主动消息。
- 私信场景下，被动消息没有条数限制。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

if err != nil {
    log.Fatalln("调用 CreateDirectMessage 接口失败, err = ", err)
}
message, err1 := api.PostDirectMessage(ctx, directMsg, &dto.MessageToCreate{
    Content: "私信消息",
    MsgID:   data.ID,
})
if err1 != nil {
    log.Fatalln("调用 PostDirectMessage 接口失败, err = ", err1)
}
```

## 参数说明

| 字段名 | 类型                                                   | 描述   |
| ------ | ------------------------------------------------------ | ------ |
| directMsg    |   DirectMessage  | 创建的私信会话频道[guild_id](create_direct_message.md#返回说明)  |
| MessageToCreate    | [MessageToCreate](../message/post_message#MessageToCreate) | 消息体 |

## 返回说明

返回[Message](../message/post_message.md#message) 对象

## 返回示例

同[发送消息返回示例](../message/post_message.md#返回示例)
