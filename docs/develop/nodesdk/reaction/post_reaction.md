# 发表表情表态 <Badge text="v2.9.0" />

用于在指定子频道向某条消息发表表情表态。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.reactionApi.postReaction(channelId, reactionObj);
}
```

## 参数说明

| 字段名      | 必填 | 类型                                  | 描述                             |
| ----------- | ---- | ------------------------------------- | -------------------------------- |
| channelId   | 是   | string                                | [子频道 ID](../model/channel.md) |
| reactionObj | 是   | [ReactionToCreate](#reactiontocreate) | 表情表态对象                     |

### ReactionToCreate

| 字段名     | 必填 | 类型   | 描述                                                     |
| ---------- | ---- | ------ | -------------------------------------------------------- |
| message_id | 是   | string | [消息 ID](../model/message.md)                           |
| emojy_type | 是   | number | 表情类型，参考[EmojiType](../model/emoji.md#EmojiType)   |
| emojy_id   | 是   | string | 表情 ID，参考 [Emoji 列表](../model/emoji.md#Emoji-列表) |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```js
{
}
```
