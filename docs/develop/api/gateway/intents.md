# 事件订阅 intents

事件的 intents 是一个标记位，每一位都代表不同的事件，如果需要接收某类事件，就将该位置为1。

每个 intents 位代表的是一类事件，可以使用使用 websocket 传输的数据中的 t 字段的值来区分。

事件和位移的关系如下：

```yaml
GUILDS (1 << 0) 
  - GUILD_CREATE           // 当机器人加入新guild时
  - GUILD_UPDATE           // 当guild资料发生变更时
  - GUILD_DELETE           // 当机器人退出guild时
  - CHANNEL_CREATE         // 当channel被创建时
  - CHANNEL_UPDATE         // 当channel被更新时
  - CHANNEL_DELETE         // 当channel被删除时

GUILD_MEMBERS (1 << 1)
  - GUILD_MEMBER_ADD       // 当成员加入时
  - GUILD_MEMBER_UPDATE    // 当成员资料变更时
  - GUILD_MEMBER_REMOVE    // 当成员被移除时

GUILD_MESSAGE_REACTIONS (1 << 10)
  - MESSAGE_REACTION_ADD    // 为消息添加表情表态
  - MESSAGE_REACTION_REMOVE // 为消息删除表情表态

DIRECT_MESSAGE (1 << 12)
  - DIRECT_MESSAGE_CREATE   // 当收到用户发给机器人的私信消息时

FORUM_EVENT (1 << 28)
  - THREAD_CREATE     // 当用户创建主题时
  - THREAD_UPDATE     // 当用户更新主题时
  - THREAD_DELETE     // 当用户删除主题时
  - POST_CREATE       // 当用户创建帖子时
  - POST_DELETE       // 当用户删除帖子时
  - REPLY_CREATE      // 当用户回复评论时
  - REPLY_DELETE      // 当用户回复评论时

AUDIO_ACTION (1 << 29)
  - AUDIO_START             // 音频开始播放时
  - AUDIO_FINISH            // 音频播放结束时
  - AUDIO_ON_MIC            // 上麦时
  - AUDIO_OFF_MIC           // 下麦时

AT_MESSAGES (1 << 30)
  - AT_MESSAGE_CREATE       // 当收到@机器人的消息时

```

## 举例

如开发者需要接收用户at机器人的消息，那么就需要在 intents 中设置接收 `AT_MESSAGES`。则需要先计算 `1 << 30` 的值。然后与 `0` 做位或操作，得到最终需要传递的 intents。

如果涉及到多个事件类型的接收，则需要将多个结果做位或操作，如：`0|1<<30|1<<1` 代表订阅 `AT_MESSAGES` 和 `GUILD_MEMBERS` 这两类事件。

## 权限

事件类型的订阅，是有权限控制的，除了 `GUILDS`，`AT_MESSAGES`，`GUILD_MEMBERS` 事件是基础的事件，默认有权限订阅之外，其他的特殊事件，都需要经过申请才能够使用，如果在
鉴权的时候传递了无权限的 intents，websocket 会报错，并直接关闭连接。请开发者注意订阅事件的范围需要控制在自己所需要的范围之内。

如果拥有的某个特殊事件类型的权限被取消，则在当前连接上不会报错，但是将不会收到对应的事件类型，如果重新连接，则报错，所以如果开发者的事件类型权限被取消，请及时调整监听事件代码，避免报错导致的无法连接。