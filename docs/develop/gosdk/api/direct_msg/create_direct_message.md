# 创建私信会话

用于机器人和在同一个频道内的成员创建私信会话。

::: 注意

机器人和用户存在共同频道才能创建私信会话

:::

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

directMsg, err := api.CreateDirectMessage(ctx, &dto.DirectMessageToCreate{
  SourceGuildID: guildId,
  RecipientID:   userId,
})
if err != nil {
  log.Fatalln("调用 CreateDirectMessage 接口失败, err = ", err)
}
```

## 参数说明

| 字段名  | 类型                                                      | 描述             |
| ------- | --------------------------------------------------------- | ---------------- |
| request | [CreateDirectMessage](#CreateDirectMessage) | 私信频道创建请求 |

## CreateDirectMessage

| 字段名          | 类型   | 描述      |
| --------------- | ------ | --------- |
| SourceGuildID | string | 源频道 ID |
| RecipientID   | string | 接收者 ID |

## 返回说明

成功创建后，返回[DirectMessage](#DirectMessage)对象返回创建成功的频道 ID，子频道 ID 和创建时间。

## DirectMessage

| 字段名      | 类型   | 描述      |
| ----------- | ------ | --------- |
| GuildID    | string | 频道 ID   |
| ChannelID  | string | 子频道 ID |
| CreateTime | string | 创建时间  |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "create_time": "1638323931"
}
```
