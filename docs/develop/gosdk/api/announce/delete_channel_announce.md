# 删除子频道公告 

删除子频道公告。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

err := api.DeleteChannelAnnounces(ctx, channelId, msgId)
if err != nil {
    log.Fatalln("调用 DeleteChannelAnnounces 接口失败, err = ", err)
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                           |
| --------- | ---- | ------ | ------------------------------ |
| channelId | 是   | string | 子频道 ID     |
| msgId | 是   | string | 消息 ID |
