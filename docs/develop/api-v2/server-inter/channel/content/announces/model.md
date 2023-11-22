# 公告对象(Announces)

## Announces

| 字段名                | 类型                                        | 描述                        |
|--------------------|-------------------------------------------|---------------------------|
| guild_id           | string                                    | 频道 id                     |
| channel_id         | string                                    | 子频道 id                    |
| message_id         | string                                    | 消息 id                     |
| announces_type     | uint32                                    | 公告类别 0:成员公告 1:欢迎公告，默认成员公告 |
| recommend_channels | [RecommendChannel](#RecommendChannel)  数组 | 推荐子频道详情列表                 |

# 推荐子频道对象(RecommendChannel)

## RecommendChannel

| 字段名        | 类型     | 描述     |
|:-----------|--------|--------|
| channel_id | string | 子频道 id |
| introduce  | string | 推荐语    |
