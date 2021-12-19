# SDK 接入指南

## 当前版本

<NpmBadge packageName="@tencent-connect/bot-node-sdk" />

## 安装

```sh
$ npm i @tencent-connect/bot-node-sdk
# 或者
$ yarn add @tencent-connect/bot-node-sdk
```

- 如果安装失败，可尝试使用腾讯源, 在以上命令后拼接 ` --registry=https://mirrors.tencent.com/npm/`

## 使用示例

```js
// ESModule | TypeScript
// import { creatOpenAPI, creatWebsocket } from '@tencent-connect/bot-node-sdk';

// CommonJs
const { creatOpenAPI, creatWebsocket } = require('@tencent/bot-node-sdk');

const testConfig = {
  appID: 'APPID', // 申请机器人时获取到的机器人ID
  token: 'TOKEN', // 申请机器人时获取到的机器人token
  intents: [], // 事件订阅,用于开启可接收的消息类型
};
const client = creatOpenAPI(testConfig);
const ws = creatWebsocket(testConfig);
```

- `APPID`、`TOKEN` 需要去[QQ频道机器人开发者后台](https://bot.q.qq.com/#/home)申请
- intents 可选值举例：`['GUILDS', 'GUILD_MEMBERS', 'DIRECT_MESSAGE', 'AUDIO_ACTION', 'AT_MESSAGES']`，[详情参考](https://bot.q.qq.com/wiki/develop/api/gateway/intents.html#%E4%B8%BE%E4%BE%8B)

### client调用API接口

```js
client.messageApi
  .postMessage(channelID, {
    content: 'messageApi接口触发：hello',
  })
  .then(res => {
    console.log(res.data);
  });
```

### client返回示例

```json
{
  "id": "xxxxx",
  "channel_id": "xxxxx",
  "guild_id": "xxxxx",
  "content": "messageApi接口触发：hello",
  "timestamp": "2021-12-03T17:20:00+08:00",
  "tts": false,
  "mention_everyone": false,
  "author": {
    "id": "xxxxx",
    "username": "",
    "avatar": "",
    "bot": true
  },
  "pinned": false,
  "type": 0,
  "flags": 0
}
```

### ws 消息监听

```js
// 消息监听
ws.on('READY', data => {
  console.log('[READY] 事件接收 :', data);
});
ws.on('ERROR', data => {
  console.log('[ERROR] 事件接收 :', data);
});
ws.on('GUILDS', data => {
  console.log('[GUILDS] 事件接收 :', data);
});
ws.on('GUILGUILD_MEMBERSDS', data => {
  console.log('[GUILGUILD_MEMBERSDS] 事件接收 :', data);
});
ws.on('DIRECT_MESSAGE', data => {
  console.log('[DIRECT_MESSAGE] 事件接收 :', data);
});
ws.on('AUDIO_ACTION', data => {
  console.log('[AUDIO_ACTION] 事件接收 :', data);
});
ws.on('AT_MESSAGES', data => {
  console.log('[AT_MESSAGES] 事件接收 :', data);
});
```

### ws 接收到的通知示例

```js
{
  eventType: 'EVENT_TYPE',
  msg: {
    author: {
      avatar: 'xxx',
      bot: false,
      id: 'xxx',
      username: 'xxx,'
    },
    channel_id: 'xxx',
    content: 'xxx',
    guild_id: 'xxx',
    id: 'xxx',
    member: { joined_at: 'xxx', roles: [Array] },
    mentions: [ [Object] ],
    timestamp: 'xxx'
  }
}
```
