# 创建子频道公告 

将某条消息创建为子频道的公告。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

announces, err := api.CreateChannelAnnounces(ctx, channelId, &dto.ChannelAnnouncesToCreate{
    MessageID: msgId,
})
if err != nil {
    log.Fatalln("调用 CreateChannelAnnounces 接口失败, err = ", err)
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| channelId   | 是   | string | 子频道 ID     |
| CreateChannelAnnounces | 是   | [CreateChannelAnnounces](#CreateChannelAnnounces) | 创建子频道公告请求参数 |


### CreateChannelAnnounces

| 字段名       | 类型   | 描述                      |
| ------------ | ------ | ------------------------- |
| msgId | string | 消息 ID  |

## 返回说明

返回 [Announces](#Announces) 对象。

### Announces

| 字段名       | 类型   | 描述                      |
| ------------ | ------ | ------------------------- |
| GuildID     | string | 频道 ID    |
| ChannelID   | string | 子频道 ID |
| MessageID | string | 消息 ID  |

## 返回示例

`data`：

```json
{
    "guild_id":"guild_id",
    "channel_id":"channel_id",
    "message_id":"message_id"
}
```
