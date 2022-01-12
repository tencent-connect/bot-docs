# 表情表态对象

在消息、帖子、评论、回复中使用的表情。

表情表态相关事件可参考[表情表态事件](../../api/gateway/guild_message_reactions.md)。

事件监听方式可参考[ws 使用](../wss/model.md)。

具体示例可参考[使用示例](#表情表态事件监听)。

## MessageReaction

| 字段名     | 类型                              | 描述                      |
| ---------- | --------------------------------- | ------------------------- |
| user_id    | string                            | [用户 ID](./user.md)      |
| guild_id   | string                            | [频道 ID](./guild.md)     |
| channel_id | string                            | [子频道 ID](./channel.md) |
| target     | [ReactionTarget](#reactiontarget) | 表态对象                  |
| emoji      | [Emoji](./emoji.md)               | 表态所用表情              |

## ReactionTarget

| 字段名 | 类型   | 描述                                                         |
| ------ | ------ | ------------------------------------------------------------ |
| id     | string | 表态对象 ID                                                  |
| type   | number | 表态对象类型，参考 [ReactionTargetType](#reactiontargettype) |

## ReactionTargetType

| 值  | 描述 |
| --- | ---- |
| 0   | 消息 |
| 1   | 帖子 |
| 2   | 评论 |
| 3   | 回复 |

## 表情表态事件监听

### 代码示例

```js
const { createWebsocket } = require('qq-guild-bot');

// 创建ws连接
const config = {
  appID: 'xxxxxx',
  token: 'xxxxxx',
  intents: ['GUILD_MESSAGE_REACTIONS'],
};
const ws = createWebsocket(config);

// 监听事件
ws.on('GUILD_MESSAGE_REACTIONS', data => {
  console.log('[GUILD_MESSAGE_REACTIONS] 事件接收 :', data);
});
```

在频道内，长按某条消息进行表情回复 `👍`，ws 收到消息并打印如下信息：

```js
[GUILD_MESSAGE_REACTIONS] 事件接收 : {
  eventType: 'MESSAGE_REACTION_ADD',
  msg: {
    channel_id: 'xxxxxx',
    emoji: { id: '76', type: 1 },
    guild_id: 'xxxxxx',
    target: { id: '24', type: 0 },
    user_id: 'xxxxxx'
  }
}
```
