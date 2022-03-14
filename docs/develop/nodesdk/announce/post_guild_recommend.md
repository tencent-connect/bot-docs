# 创建频道公告推荐子频道 <Badge text="v2.9.0" />

用于将指定子频道设置为当前频道的推荐子频道，并以全局公告形式展示。

::: warning 注意

- 同频道内推荐子频道最多只能创建 `3` 条。
- 推荐子频道和全局公告**不能同时存在**，会互相顶替设置。
- 只有子频道权限为全体成员可见才可设置为推荐子频道。
- **删除频道公告**推荐子频道请使用 [删除频道公告](./delete_channel_announce.md),并将 `message_id` 设置为 `all`。

:::

## 使用示例

```javascript
async function demo() {
  let { data } = await client.announceApi.postGuildRecommend(guildId, recommendObj);
}
```

## 参数说明

| 字段名       | 必填 | 类型                          | 描述                         |
| ------------ | ---- | ----------------------------- | ---------------------------- |
| guildId      | 是   | string                        | [频道 ID](../model/guild.md) |
| recommendObj | 是   | [RecommendObj](#recommendobj) | 推荐子频道设置对象           |

### RecommendObj

| 字段名             | 必填 | 类型                                    | 描述                                            |
| ------------------ | ---- | --------------------------------------- | ----------------------------------------------- |
| announces_type     | 否   | number                                  | 公告类别 0:成员公告，1:欢迎公告，默认为成员公告 |
| recommend_channels | 是   | [RecommendChannel[]](#recommendchannel) | 推荐子频道列表                                  |

### RecommendChannel

| 字段名     | 类型   | 描述                      |
| ---------- | ------ | ------------------------- |
| channel_id | string | [子频道 ID](./channel.md) |
| introduce  | string | 推荐语                    |

## 返回说明

返回 [Announce](#announce) 对象。

### Announce

| 字段名             | 类型                                         | 描述                             |
| ------------------ | -------------------------------------------- | -------------------------------- |
| guild_id           | string                                       | [频道 ID](../model/guild.md)     |
| channel_id         | string                                       | [子频道 ID](../model/channel.md) |
| message_id         | string                                       | [消息 ID](../model/message.md)   |
| announce_type      | number                                       | 推荐类别 0:成员公告; 1:欢迎公告  |
| recommend_channels | [RecommendChannel[]](#recommendchannel) 数组 | 推荐子频道详情列表               |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxx",
  "message_id": "",
  "announces_type": 1,
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
