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

使用前请先确保已在机器人平台[创建机器人](https://bot.q.qq.com/wiki/#_4-%E5%88%9B%E5%BB%BA%E6%9C%BA%E5%99%A8%E4%BA%BA)，并拿到相应的`BotAppID`及`BotToken`。

```js
// ESModule | TypeScript
// import { creatOpenAPI, creatWebsocket } from '@tencent-connect/bot-node-sdk';

// CommonJs
const { creatOpenAPI, creatWebsocket } = require('@tencent/bot-node-sdk');

const testConfig = {
  appID: 'APPID', // 申请机器人时获取到的机器人 BotAppID
  token: 'TOKEN', // 申请机器人时获取到的机器人 BotToken
  intents: [], // 事件订阅,用于开启可接收的消息类型
};

// 创建 client
const client = creatOpenAPI(testConfig);

// 创建 websocket 连接
const ws = creatWebsocket(testConfig);
```

- intents 可选值举例：`['GUILDS', 'GUILD_MEMBERS', 'DIRECT_MESSAGE', 'AUDIO_ACTION', 'AT_MESSAGES']`，[详情参考](https://bot.q.qq.com/wiki/develop/api/gateway/intents.html#%E4%B8%BE%E4%BE%8B)。

通过上述示例代码我们可以拿到整个 NodeSDK 最核心的两个对象`client`和`ws`。

### 使用 client

`client`提供了一系列操作频道和发送消息的能力，如：创建频道、创建频道身份组、发送私信等等，具体能力见左侧菜单。

#### client 调用示例

以给子频道发送消息为例，使用示例如下：

```js
client.messageApi
  .postMessage(channelID, {
    content: 'messageApi接口触发：hello',
  })
  .then(res => {
    console.log(res.data);
  });
```

### client 返回示例

`client`操作的返回结果与[REST OPENAPI 接口](https://bot.q.qq.com/wiki/develop/api/#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E)保持一致。

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

### 使用 ws

`ws`用于频道内消息监听，**如要使用`client`向指定子频道发送消息，必选先建立 ws 连接**。

#### ws 调用示例

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

### ws 返回示例

以下是某个监听的返回示例：

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
