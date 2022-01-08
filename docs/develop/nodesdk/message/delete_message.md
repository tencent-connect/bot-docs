# 撤回消息 <Badge text="v2.1.0" />

撤回子频道内的消息。

::: warning 注意

- 管理员可以撤回普通成员的消息。
- 频道主可以撤回所有人的消息。

:::

## 使用示例

```javascript
async function demo() {
  let { data } = await client.messageApi.deleteMessage(channelID, messageID);
}
```

## 参数说明

| 参数      | 必填 | 类型   | 说明                             |
| --------- | ---- | ------ | -------------------------------- |
| channelID | 是   | string | [子频道 ID](../model/channel.md) |
| messageID | 是   | string | [消息 ID](../model/message.md)   |

## 返回说明

返回结果为空。

## 返回示例

`data`：

```js
'';
```
