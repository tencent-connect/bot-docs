# 发送私信消息 <Badge text="v2.6.0" />

用于发送私信消息，前提是已经创建了私信会话。

## 功能描述

- 私信的 `guild_id` 在[创建私信会话](post_dms.md)时以及[私信消息事件](../../api/gateway/direct_message.md)中获取。
- 私信场景下，每个机器人每天可以对一个用户发 `2` 条主动消息。
- 私信场景下，每个机器人每天累计可以发 `200` 条主动消息。
- 私信场景下，被动消息没有条数限制。

## 使用示例

```js
async function demo() {
  const res = await client.directMessageApi.postDirectMessage(guildId, msgObj);
}
```

## 参数说明

| 字段名  | 必填 | 类型                                                           | 描述                                                 |
| ------- | ---- | -------------------------------------------------------------- | ---------------------------------------------------- |
| guildId | 是   | string                                                         | [私信频道 ID](../model/dms.md)                       |
| msgObj  | 是   | [MessageToCreate](../message/post_messages.md#messagetocreate) | 消息体 ，参考[发送消息](../message/post_messages.md) |

## 返回说明

同[发送消息返回说明](../message/post_messages.md#返回说明)，返回[Message](../message/post_messages.md#message) 对象。

## 返回示例

参考[发送消息返回示例](../message/post_messages.md#返回示例)。
