# WSS 消息体 <Badge text="v1.0.0" />

WS 支持监听的事件类型可参考[事件订阅 intents](../../api/gateway/intents.md)。

## 使用示例

### 创建 WS 实例并监听消息

```js
import { createWebsocket } from 'qq-guild-bot';
const ws = createWebsocket(testConfigWs);
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

### 接收到的通知示例

以“创建子频道”为例，通过 client API 创建一个子频道，我们将在`GUILDS`事件中拿到如下结果：

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

其中`eventType`值类型可参考[事件类型](../../api/gateway/guild.md)。
