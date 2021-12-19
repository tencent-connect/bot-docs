# 发送消息

## 功能描述

- 要求操作人在该子频道具有`发送消息`的权限。
- 发送成功之后，会触发一个创建消息的事件。
- 被动回复消息有效期为 5 分钟
- 主动推送消息每日每个子频道限 2 条
- **发送消息接口要求机器人接口需要链接到 websocket gateway 上保持在线状态**

## 使用示例

```javascript
async function demo() {
  let { data } = await client.messageApi.postMessage(channelID, message);
}
```

## 参数说明

| 参数      | 必填 | 类型                                        | 说明       |
| --------- | ---- | ------------------------------------------- | ---------- |
| channelID | 是   | string                                      | 子频道 id  |
| messsage  | 是   | [MessageToCreate](model.md#messagetocreate) | 消息体结构 |

## 返回说明

返回[Message](model.md#message) 对象

## 返回示例

以发送文本内容`hello world`为例，下面是返回示例

`data`:

```json
{
  "id": "101234567890abcdef",
  "channel_id": "10001",
  "guild_id": "6400000001",
  "content": "hello world",
  "timestamp": "2021-05-13T14:45:45+08:00",
  "tts": false,
  "mention_everyone": false,
  "author": {
    "id": "12345",
    "username": "abc",
    "avatar": "",
    "bot": true
  },
  "embeds": [{}],
  "pinned": false,
  "type": 0,
  "flags": 0
}
```
