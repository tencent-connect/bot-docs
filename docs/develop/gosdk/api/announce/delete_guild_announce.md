# 删除频道全局公告 

删除频道全局公告。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

err := api.DeleteGuildAnnounces(ctx, guildId, msgId)
if err != nil {
    log.Fatalln("调用 DeleteGuildAnnounces 接口失败, err = ", err)
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                           |
| --------- | ---- | ------ | ------------------------------ |
| guildId   | 是   | string | 频道 ID  |
| msgId | 是   | string | 消息 ID |

