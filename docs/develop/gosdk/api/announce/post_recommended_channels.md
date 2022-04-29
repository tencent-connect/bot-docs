# 创建频道公告推荐子频道

用于将指定子频道设置为当前频道的推荐子频道，并以全局公告形式展示。

::: warning 注意

- 同频道内推荐子频道最多只能创建 `3` 条。
- 推荐子频道和全局公告**不能同时存在**，会互相顶替设置。
- 只有子频道权限为全体成员可见才可设置为推荐子频道。
- **删除频道公告**推荐子频道请使用 [删除频道公告](./delete_channel_announce.md),并将 `messageId` 设置为 `all`。

:::

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

announces, err := api.CreateGuildAnnounces(ctx, guildId, &dto.GuildAnnouncesToCreate{
  RecommendChannels: []dto.RecommendChannel{
    {
      ChannelID: channelId,
      Introduce: "推荐",
    },
  },
})
if err != nil {
  log.Fatalln("调用 CreateGuildAnnounces 接口失败, err = ", err)
}
```

## 参数说明

| 字段名       | 必填 | 类型                          | 描述                         |
| ------------ | ---- | ----------------------------- | ---------------------------- |
| guildId      | 是   | string                        | 频道 ID |
| GuildAnnouncesToCreate      | 是   | [GuildAnnouncesToCreate](#GuildAnnouncesToCreate) | 推荐子频道列表           |

### GuildAnnouncesToCreate

| 字段名             | 必填 | 类型                                    | 描述                                            |
| ------------------ | ---- | --------------------------------------- | ----------------------------------------------- |
| RecommendChannels | 是   | [] [RecommendChannel](#RecommendChannel)  | 推荐子频道列表                                  |

### RecommendChannel

| 字段名     | 类型   | 描述                      |
| ---------- | ------ | ------------------------- |
| ChannelID | string | 子频道 ID |
| Introduce  | string | 推荐语                    |

## 返回说明

返回 [Announces](#Announces) 对象。

### Announces

| 字段名       | 类型   | 描述                      |
| ------------ | ------ | ------------------------- |
| GuildID     | string | 频道 ID    |
| ChannelID   | string | 子频道 ID |
| MessageID | string | 消息 ID  |
| AnnouncesType | uint32 | 公告类别 0:成员公告，1:欢迎公告，默认为成员公告|
| RecommendChannels | [] [RecommendChannel](#RecommendChannel) |  推荐子频道列表|


## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxx",
  "message_id": "",
  "announces_type": 0,
  "recommend_channels": [
    {
      "channel_id": "xxxx",
      "introduce": "推荐语"
    },
    {
      "channel_id": "xxxx",
      "introduce": "推荐语"
    }
  ]
}
```
