# 公告对象（Announce） 

## Announce

| 字段名     | 类型   | 描述      |
| ---------- | ------ | --------- |
| guild_id   | string | 频道 ID   |
| channel_id | string | 子频道 ID |
| message_id | string | 消息 ID   |
| announce_type      | number    | 推荐类别 0:成员公告; 1:欢迎公告  |
| recommend_channels | [RecommendChannel](#recommendchannel) 列表 | 推荐子频道详情列表               |

## RecommendChannel

| 字段名     | 类型   | 描述      |
| ---------- | ------ | --------- |
| channel_id | string | 子频道 ID |
| introduce  | string | 消息 ID   |
