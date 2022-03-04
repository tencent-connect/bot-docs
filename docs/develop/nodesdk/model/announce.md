# 公告对象（Announce） <Badge text="v2.2.0" />

## Announce

| 字段名             | 类型                                         | 描述                            |
| ------------------ | -------------------------------------------- | ------------------------------- |
| guild_id           | string                                       | [频道 ID](./guild.md)           |
| channel_id         | string                                       | [子频道 ID](./channel.md)       |
| message_id         | string                                       | [消息 ID](./message.md)         |
| announce_type      | number                                       | 推荐类别 0:成员公告; 1:欢迎公告 |
| recommend_channels | [RecommendChannel[]](#recommendchannel) 数组 | 推荐子频道详情列表              |

## RecommendChannel

子频道对象

| 字段名     | 类型   | 描述                      |
| ---------- | ------ | ------------------------- |
| channel_id | string | [子频道 ID](./channel.md) |
| introduce  | string | 推荐语                    |
