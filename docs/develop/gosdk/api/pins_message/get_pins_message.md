# 获取精华消息

用于获取子频道 `channelId` 内的精华消息。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

pinsMessage, err := api.GetPins(ctx, channelId)
if err != nil {
  log.Fatalln("调用 GetPins 接口失败, err = ", err)
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| channelId | 是   | string | 子频道 ID |

## 返回说明

返回 [PinsMessage](#PinsMessage) 对象。

### PinsMessage

| 字段名      | 类型     | 描述                               |
| ----------- | -------- | ---------------------------------- |
| GuildID    | string   | 频道 ID      |
| ChannelID  | string   | 子频道 ID  |
| MessageIDs | string[] | 消息 ID |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "message_ids": ["xxxxx"]
}
```
