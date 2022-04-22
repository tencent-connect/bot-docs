# 删除日程 

删除`日程子频道`里的一个日程。

::: warning 注意

要求操作人具有管理频道的权限，如果是机器人，则需要将机器人设置为管理员。

:::

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

err := api.DeleteSchedule(ctx, channelId, scheduleId)
if err != nil {
    log.Fatalln("调用 DeleteSchedule 接口失败, err = ", err)
}
```

## 参数说明

| 字段名     | 必填 | 类型   | 描述                             |
| ---------- | ---- | ------ | -------------------------------- |
| channelId  | 是   | string | [子频道 ID](../../model/channel.md) |
| scheduleId | 是   | string | 日程 ID                          |

