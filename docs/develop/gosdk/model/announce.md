# 公告对象（Announces） 

## Announces

| 字段名       | 类型   | 描述                      |
| ------------ | ------ | ------------------------- |
| GuildID     | string | 频道 ID    |
| ChannelID   | string | 子频道 ID |
| MessageID | string | 消息 ID  |
| AnnouncesType | uint32 | 公告类别 0:成员公告，1:欢迎公告，默认为成员公告|
| RecommendChannels | []* [RecommendChannel](#RecommendChannel) |  推荐子频道列表||

## RecommendChannel

| 字段名     | 类型   | 描述                      |
| ---------- | ------ | ------------------------- |
| ChannelID | string | 子频道 ID |
| Introduce  | string | 推荐语                    |
