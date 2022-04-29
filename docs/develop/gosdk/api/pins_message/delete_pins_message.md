# 删除精华消息

用于移除子频道 `channelId` 下的精华消息 `messageId` 。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

err := api.DeletePins(ctx, channelId, msgId)
if err != nil {
    log.Fatalln("调用 DeletePins 接口失败, err = ", err)
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| channelId | 是   | string | 子频道 ID |
| msgId | 是   | string | 消息 ID   |

