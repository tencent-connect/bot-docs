# WSS 消息体

## 使用示例

### 创建 WSS 实例并监听消息

```js
import { creatWebsocket } from '@tencent/bot-node-sdk';
const ws = creatWebsocket(testConfigWs);
ws.on('READY', (data) => {
  console.log('[READY] 事件接收 :', data);
})
ws.on('ERROR', (data) => {
  console.log('[ERROR] 事件接收 :', data);
})
ws.on('GUILDS', (data) => {
  console.log('[GUILDS] 事件接收 :', data);
})
ws.on('GUILGUILD_MEMBERSDS', (data) => {
  console.log('[GUILGUILD_MEMBERSDS] 事件接收 :', data);
})
ws.on('DIRECT_MESSAGE', (data) => {
  console.log('[DIRECT_MESSAGE] 事件接收 :', data);
})
ws.on('AUDIO_ACTION', (data) => {
  console.log('[AUDIO_ACTION] 事件接收 :', data);
})
ws.on('AT_MESSAGES', (data) => {
  console.log('[AT_MESSAGES] 事件接收 :', data);
})
```

### 接收到的通知示例

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

