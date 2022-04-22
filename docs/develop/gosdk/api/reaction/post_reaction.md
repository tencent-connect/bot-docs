# 发表表情表态

用于在指定子频道向某条消息发表表情表态。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

err := api.CreateMessageReaction(ctx, channelId, msgId, dto.Emoji{
    ID:   "4",
    Type: 1,
})
if err != nil {
    log.Fatalln("调用 CreateMessageReaction 接口失败, err = ", err)
}
```


## 参数说明

| 字段名      | 必填 | 类型                                  | 描述                             |
| ----------- | ---- | ------------------------------------- | -------------------------------- |
| channelId  | 是   | string                                | 子频道 ID |
| msgId  | 是   | string                                | 消息 ID                     |
| Emoji  | 是   | [Emoji](#Emoji)                       | emoji表情    |

## Emoji

| 字段名      | 必填 | 类型                                  | 描述                             |
| ----------- | ---- | ------------------------------------- | -------------------------------- |
| type        | 是   | int                                   | 表情类型，参考[EmojiType](../../model/emoji.md#EmojiType)  |
| emoji_id    | 是   | string                                | 表情 ID，参考 [Emoji 列表](../../model/emoji.md#Emoji-列表)|

