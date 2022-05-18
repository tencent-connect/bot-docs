# 拉取表情表态用户列表 <Badge text="v2.9.4" />

拉取对消息 message_id 指定表情表态的用户列表。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.reactionApi.getReactionUserList(channelId, reactionObj, options);
}
```

## 参数说明

| 字段名      | 必填 | 类型                                  | 描述                             |
| ----------- | ---- | ------------------------------------- | -------------------------------- |
| channelId   | 是   | string                                | [子频道 ID](../model/channel.md) |
| reactionObj | 是   | [ReactionToCreate](#reactiontocreate) | 表情表态对象                     |
| options | 是   | [QueryParam](#QueryParam) | 用户列表入参对象                     |

### ReactionToCreate <Badge text="v2.9.1" />

::: danger 注意

`v2.9.0` 版本的`emojy_type`、`emojy_id`存在拼写错误（emojy -> emoji），该错误已在 v2.9.1 版本修正，如使用 v2.9.0 版本，请留意升级后修正 `emoji_type` 和 `emoji_id`拼写。

:::

| 字段名     | 必填 | 类型   | 描述                                                     |
| ---------- | ---- | ------ | -------------------------------------------------------- |
| message_id | 是   | string | [消息 ID](../model/message.md)                           |
| emoji_type | 是   | number | 表情类型，参考[EmojiType](../model/emoji.md#EmojiType)   |
| emoji_id   | 是   | string | 表情 ID，参考 [Emoji 列表](../model/emoji.md#Emoji-列表) |


### QueryParam <Badge text="v2.9.4" />

| 字段名     | 必填 | 类型   | 描述                                                     |
| ---------- | ---- | ------ | -------------------------------------------------------- |
| cookie | 是   | string | 上次请求返回的cookie，第一次请求无需填写                          |
| limit | 是   | number | 每次拉取数量，默认20，最多50，只在第一次请求时设置   |

## 返回说明

| 字段名      | 类型   | 描述                                                     |
| ---------- | ------ | -------------------------------------------------------- |
| users | array | 用户对象，参考 User，会返回 id, username, avatar                         |
| cookie | string | 分页参数，用于拉取下一页   |
| is_end | boolean | 是否已拉取完成到最后一页，true代表完成   |

## 返回示例

`data`：

```js
{
    "users": [
        {
            "id": "xxx",
            "username": "频道机器人",
            "avatar": "http://xxxxx"
        }
    ],
    "cookie":"1_2",
    "is_end": false
}
```
