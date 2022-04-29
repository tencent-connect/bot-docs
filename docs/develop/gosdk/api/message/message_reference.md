# 发送引用消息

::: warning 注意

- 只支持引用机器人自己发送到的消息以及用户@机器人产生的消息。
- 发送成功之后，会触发一个创建消息的事件。

:::

## 使用示例

使用方式同发送消息，在`PostMessage`中设置 `MessageReference` 即可发送引用消息。

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

message, err := api.PostMessage(ctx, channelId, &dto.MessageToCreate{
    MsgID:   msgId,
    Content: "<emoji:4>这是一条引用消息",
    MessageReference: &dto.MessageReference{
        MessageID:             msgId,
        IgnoreGetMessageError: false,
    },
})
if err != nil {
    log.Fatalln("调用 PostMessage 接口失败, err = ", err)
}
```

## 返回示例

`data`:

```json
{
  "id": "xxxxxx",
  "channel_id": "xxxxxx",
  "guild_id": "xxxxxx",
  "content": "",
  "timestamp": "2021-05-13T14:45:45+08:00",
  "tts": false,
  "mention_everyone": false,
  "author": {
    "id": "xxxxxx",
    "username": "xxxxxx",
    "avatar": "",
    "bot": true
  },
  "pinned": false,
  "type": 0,
  "flags": 0
}
```
