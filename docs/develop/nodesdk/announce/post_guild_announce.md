# 创建频道全局公告 <Badge text="v2.2.0" />

将某个子频道的某条消息创建为频道全局公告。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.announceApi.postGuildAnnounce(guildId, channelId, messageId);
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| guildId   | 是   | string | [频道 ID](../model/guild.md)     |
| channelId | 是   | string | [子频道 ID](../model/channel.md) |
| messageId | 是   | string | [消息 ID](../model/message.md)   |

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

### RecommendChannel

| 字段名     | 类型   | 描述                             |
| ---------- | ------ | -------------------------------- |
| channel_id | string | [子频道 ID](../model/channel.md) |
| introduce  | string | 推荐语                           |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "123456",
  "message_id": "xxxxxx",
  "announces_type": 0,
  "recommend_channels": []
}
```
