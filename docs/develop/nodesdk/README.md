# SDK 接入指南

## 介绍

`NodeSDK`主要基于基础 API 上进行封装，提供给用户一种简单、高效的使用方式。

整体而言 SDK 包含了以下功能：

- 具有完备的消息通信模块，与服务端保持**⻓连接**。
- 能发送 **http** 请求，也能作为中转回包给开发者。
- 能调用基础 **API**。

### SDK 底层架构设计

整个 SDK 分三层设计：`应用层`、`框架层`、`基础层`，具体结构如下图所示：

<img :src="$withBase('/images/node-sdk/framework.png')" alt="SDK 底层架构设计">

整个 SDK 设计与实现基于**两条主线**：

1. NodeSDK 与基础侧的通信模块，属于机器人**被动接受消息**。比如有用户@机器人、新
   用户加入频道触发的事件等等。
   <img :src="$withBase('/images/node-sdk/api-client.png')" alt="SDK 底层架构设计">
2. 机器人通过 NodeSDK 调用基础能力，属于机器人**主动触发消息**。比如欢迎语提醒、
   定时打卡任务触发、查询当前频道成员列表等等。
   <img :src="$withBase('/images/node-sdk/ws-client.png')" alt="SDK 底层架构设计">

## 安装

### 当前版本

<NpmBadge packageName="@tencent-connect/bot-node-sdk" />

### npm 方式

```sh
$ npm i @tencent-connect/bot-node-sdk
```

如果安装失败，可尝试使用腾讯源

```sh
$ npm i @tencent/bot-node-sdk --registry=https://mirrors.tencent.com/npm/
```

### yarn 方式

```sh
$ yarn add @tencent-connect/bot-node-sdk
```

## 使用示例

使用前请先确保已在机器人平台[创建机器人](https://bot.q.qq.com/wiki/#_4-%E5%88%9B%E5%BB%BA%E6%9C%BA%E5%99%A8%E4%BA%BA)，并拿到相应的`BotAppID`及`BotToken`。

```js
// ESModule | TypeScript
// import { creatOpenAPI, creatWebsocket } from '@tencent-connect/bot-node-sdk';

// CommonJs
const { creatOpenAPI, creatWebsocket } = require('@tencent-connect/bot-node-sdk');

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

通过上述示例代码我们可以拿到整个 NodeSDK 最核心的两个对象`client`和`ws`，整个 SDK 能力将由这两个对象提供。

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

::: tip 提示

针对返回失败的情况，可查看[错误状态码](../api/openapi/error/error.md#错误处理)描述。

:::

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
