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

| 字段名     | 类型   | 描述                      |
| ---------- | ------ | ------------------------- |
| guild_id   | string | [频道 ID](./guild.md)     |
| channel_id | string | [子频道 ID](./channel.md) |
| message_id | string | [消息 ID](./message.md)   |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "message_id": "xxxxxx"
}
```
