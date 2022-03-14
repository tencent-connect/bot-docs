# 删除表情表态 <Badge text="v2.9.0" />

删除自己对消息 `message_id` 的表情表态。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.reactionApi.deleteReaction(channelId, reactionObj);
}
```

## 参数说明

| 字段名      | 必填 | 类型                                  | 描述                             |
| ----------- | ---- | ------------------------------------- | -------------------------------- |
| channelId   | 是   | string                                | [子频道 ID](../model/channel.md) |
| reactionObj | 是   | [ReactionToDelete](#reactiontodelete) | 表情表态对象                     |

### ReactionToDelete <Badge text="v2.9.1" />

::: danger 注意

`v2.9.0` 版本的`emojy_type`、`emojy_id`存在拼写错误（emojy -> emoji），该错误已在 v2.9.1 版本修正，如使用 v2.9.0 版本，请留意升级后修正 `emoji_type` 和 `emoji_id`拼写。

:::

| 字段名     | 必填 | 类型   | 描述                                                     |
| ---------- | ---- | ------ | -------------------------------------------------------- |
| message_id | 是   | string | [消息 ID](../model/message.md)                           |
| emoji_type | 是   | number | 表情类型，参考[EmojiType](../model/emoji.md#EmojiType)   |
| emoji_id   | 是   | string | 表情 ID，参考 [Emoji 列表](../model/emoji.md#Emoji-列表) |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```js
{
}
```
