# 创建频道全局公告 

将某个子频道的某条消息创建为频道全局公告。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

announces, err := api.CreateGuildAnnounces(ctx, guildId, &dto.GuildAnnouncesToCreate{
    MessageID: msgId,
    ChannelID: channelId,
})
if err != nil {
    log.Fatalln("调用 CreateGuildAnnounces 接口失败, err = ", err)
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| guildId   | 是   | string | 频道 ID     |
| GuildAnnouncesToCreate | 是   | [GuildAnnouncesToCreate](#GuildAnnouncesToCreate) | 创建频道公告请求参数 |


### GuildAnnouncesToCreate

| 字段名       | 类型   | 描述                      |
| ------------ | ------ | ------------------------- |
| ChannelID | string | 子频道ID  |
| MessageID | string | 消息 ID  |

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
