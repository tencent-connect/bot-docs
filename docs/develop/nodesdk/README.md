# NodeSDK 接入指南

## 介绍

`NodeSDK`主要基于[基础 API](../api/README.md)封装，提供给用户一种简单、高效的使用方式。

## 安装 <NpmBadge packageName="qq-guild-bot" />

```sh
npm i qq-guild-bot

# 或者使用yarn
yarn add qq-guild-bot

# 国内安装可以使用腾讯源
npm i qq-guild-bot --registry=https://mirrors.tencent.com/npm/
```

:::danger 注意
`@tencent-connect/bot-node-sdk`已更名为`qq-guild-bot`。 原包已废弃，请使用新包！
:::

## 使用示例

使用前请先确保已在机器人平台[创建机器人](https://bot.q.qq.com/wiki/#_4-%E5%88%9B%E5%BB%BA%E6%9C%BA%E5%99%A8%E4%BA%BA)，并拿到相应的`BotAppID`及`BotToken`。

```js
// ESModule | TypeScript
// import { createOpenAPI, createWebsocket } from 'qq-guild-bot';

// CommonJs
const { createOpenAPI, createWebsocket } = require('qq-guild-bot');

const testConfig = {
  appID: 'APPID', // 申请机器人时获取到的机器人 BotAppID
  token: 'TOKEN', // 申请机器人时获取到的机器人 BotToken
  intents: ['PUBLIC_GUILD_MESSAGES'], // 事件订阅,用于开启可接收的消息类型
  sandbox: false, // 沙箱支持，可选，默认false. v2.7.0+
};

// 创建 client
const client = createOpenAPI(testConfig);

// 创建 websocket 连接
const ws = createWebsocket(testConfig);
```

- intents 可选值举例：`['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES','GUILD_MESSAGE_REACTIONS','DIRECT_MESSAGE', 'INTERACTION','MESSAGE_AUDIT','FORUMS_EVENT','AUDIO_ACTION', 'PUBLIC_GUILD_MESSAGES']`，[详情参考](https://bot.q.qq.com/wiki/develop/api/gateway/intents.html)。
- 沙箱配置说明：[接口域名](../api/#接口域名)

:::warning 注意

- 事件类型的订阅，是有权限控制的，除了 `GUILDS`，`PUBLIC_GUILD_MESSAGES`，`DIRECT_MESSAGE`，`GUILD_MEMBERS` 事件是基础的事件，默认有权限订阅之外，其他的特殊事件，都需要**经过申请才能够使用**，如果在鉴权的时候传递了无权限的 `intents`，`websocket` **会报错，并直接关闭连接**。

- `intents`传**空数组**时，将默认开启**全部**事件类型的监听。

:::

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
    // 数据存储在data中
    console.log(res.data);
  })
  .catch(err => {
    // err信息错误码请参考API文档错误码描述
    console.log(err);
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

`ws`用于频道内消息监听，**如要使用`client`向指定子频道发送消息，必须先建立 ws 连接**。

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
ws.on('GUILD_MEMBERS', data => {
  console.log('[GUILD_MEMBERS] 事件接收 :', data);
});
ws.on('GUILD_MESSAGES', data => {
  console.log('[GUILD_MESSAGES] 事件接收 :', data);
});
ws.on('GUILD_MESSAGE_REACTIONS', data => {
  console.log('[GUILD_MESSAGE_REACTIONS] 事件接收 :', data);
});
ws.on('DIRECT_MESSAGE', data => {
  console.log('[DIRECT_MESSAGE] 事件接收 :', data);
});
ws.on('INTERACTION',data => {
  console.log('[INTERACTION] 事件接收 :', data);
});
ws.on('MESSAGE_AUDIT', data => {
  console.log('[MESSAGE_AUDIT] 事件接收 :', data);
});
ws.on('FORUMS_EVENT', data => {
  console.log('[FORUMS_EVENT] 事件接收 :', data);
});
ws.on('AUDIO_ACTION', data => {
  console.log('[AUDIO_ACTION] 事件接收 :', data);
});
ws.on('PUBLIC_GUILD_MESSAGES', data => {
  console.log('[PUBLIC_GUILD_MESSAGES] 事件接收 :', data);
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

拿 **“创建子频道”** 场景举个例子：

```js
// 开启事件监听
ws.on('GUILDS', data => {
  console.log(data);
});

// 创建子频道
client.channelApi.postChannel('GUILD_ID', {
  name: 'test_creation',
  type: 0,
  parent_id: 'CHANNEL_ID',
  owner_id: '0',
  sub_type: 0,
});
```

上述代码打印信息为：

```js
{
  eventType: 'CHANNEL_CREATE',
  msg: {
    guild_id: 'xxxxxx',
    id: 'xxxxxx',
    name: 'test_creation',
    op_user_id: 'xxxxxx',
    owner_id: 'xxxxxx',
    sub_type: 0,
    type: 0
  }
}
```

## SDK 架构说明

整个 SDK 设计与实现基于**两条主线**：

- **主动的事件触发**
  - 频道操作能力：子频道增删改、身份组增删改、成员增删改等。
  - 主动消息推送能力。
- **被动的事件监听**
  - 通过 `websocket` 监听事件。

SDK 分三层设计：`应用层`、`框架层`、`基础层`，具体结构如下图所示：

<img :src="$withBotBase('/images/node-sdk/framework.png')" alt="SDK 底层架构设计">
