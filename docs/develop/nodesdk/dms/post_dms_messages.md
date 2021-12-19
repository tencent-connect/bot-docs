# 发送私信消息

## 功能描述

- 私信的 guild_id 在[创建私信会话](post_dms.md)时以及[私信消息事件](../../gateway/direct_message.md)中获取

## 使用示例

```js
const res = await client.directMessageApi.createDirectMessage(dm, msg);
```

## 参数说明

| 字段名 | 类型                                                   | 描述   |
| ------ | ------------------------------------------------------ | ------ |
| dm     | [DMS](model.md#DMS)                                    | 消息体 |
| msg    | [MessageToCreate](../message/model.md#messagetocreate) | 消息体 |

## 返回说明

返回[Message](../message/model.md#message) 对象

## 返回示例

同[发送消息返回示例](../message/post_messages.md#返回示例)
