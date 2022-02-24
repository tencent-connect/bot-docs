# 创建精华消息 <Badge text="v2.9.0" />

用于将`messageId`添加为子频道 `channelId` 内的精华消息。

::: warning 注意

- 精华消息在一个子频道内最多只能创建 `20` 条。
- 只有可见的消息才能被设置为精华消息。
- 接口返回对象中 `message_ids` 为当前请求后子频道内所有精华消息 `message_id` 数组。

:::

## 使用示例

```javascript
async function demo() {
  let { data } = await client.pinsMessageApi.putPinsMessage(channelId, messageId);
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| channelId | 是   | string | [子频道 ID](../model/channel.md) |
| messageId | 是   | string | [消息 ID](../model/message.md)   |

## 返回说明

返回 [PinsMessage](#pinsmessage) 对象。

### PinsMessage

| 字段名      | 类型     | 描述                               |
| ----------- | -------- | ---------------------------------- |
| guild_id    | string   | [频道 ID](../model/guild.md)       |
| channel_id  | string   | [子频道 ID](../model/channel.md)   |
| message_ids | string[] | [消息 ID](../model/message.md)数组 |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "message_ids": ["xxxxx"]
}
```
